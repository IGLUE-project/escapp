const {execSync} = require("child_process");
const fs = require("fs");
const path = require("path");
const {version} = require("../package.json");

const REPOSITORY_URL = "https://github.com/IGLUE-project/escapp";
const PROJECT_REFERENCE = "2024-1-ES01-KA220-HED-000256356";
const ROOT = path.join(__dirname, "..");

// ".git" is a directory in a normal clone, but a file ("gitdir: <path>") in a
// worktree or a submodule
const resolveGitDir = () => {
    const dotGit = path.join(ROOT, ".git");
    const stats = fs.statSync(dotGit);

    if (stats.isDirectory()) {
        return dotGit;
    }
    const pointer = (/^gitdir:\s*(.+)$/m).exec(fs.readFileSync(dotGit, "utf8"));

    return pointer ? path.resolve(ROOT, pointer[1].trim()) : null;
};

// Resolve a ref (e.g. "refs/heads/master") to a revision, whether it is stored as a
// loose file or packed away by `git gc`. Follows one level of symbolic ref.
const readRef = (gitDir, ref, depth = 0) => {
    let raw = null;

    try {
        raw = fs.readFileSync(path.join(gitDir, ref), "utf8").trim();
    } catch (e) {
        const packed = fs.readFileSync(path.join(gitDir, "packed-refs"), "utf8");
        const line = packed.split("\n").find((l) => l.endsWith(` ${ref}`));

        raw = line ? line.split(" ")[0] : null;
    }
    if (raw && raw.startsWith("ref:") && depth < 2) {
        return readRef(gitDir, raw.slice(4).trim(), depth + 1);
    }
    return raw;
};

// Every revision this clone knows to exist on a remote, from any of them: the loose
// files under refs/remotes and the entries that `git gc` has packed away.
const readPushedRevisions = (gitDir) => {
    const revisions = new Set();
    const collect = (dir) => {
        for (const entry of fs.readdirSync(dir, {"withFileTypes": true})) {
            const full = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                collect(full);
            } else {
                const value = fs.readFileSync(full, "utf8").trim();

                // Skip symbolic refs such as origin/HEAD; the ref they point at is read on its own
                if ((/^[0-9a-f]{40}$/).test(value)) {
                    revisions.add(value);
                }
            }
        }
    };

    try {
        collect(path.join(gitDir, "refs", "remotes"));
    } catch (e) {
        // No remote-tracking refs on disk
    }
    try {
        for (const line of fs.readFileSync(path.join(gitDir, "packed-refs"), "utf8").split("\n")) {
            const [revision, ref] = line.split(" ");

            if (ref && ref.startsWith("refs/remotes/") && (/^[0-9a-f]{40}$/).test(revision)) {
                revisions.add(revision);
            }
        }
    } catch (e) {
        // No packed refs
    }
    return revisions;
};

// Read the revision out of git's own files. Unlike running `git`, this does not
// depend on the binary being on PATH, nor on the repository passing git's
// ownership check, which fails when the server runs as another user (sudo, pm2).
//
// The revision reported is always the checked-out one, since that is the code
// actually running. We additionally report whether it is known to exist on some
// remote: only then can it be linked, because a commit that was never pushed, or
// one the remote has since dropped, gives a 404 on GitHub.
const readRevisionFromGitDir = () => {
    const gitDir = resolveGitDir();

    if (!gitDir) {
        return null;
    }
    const head = fs.readFileSync(path.join(gitDir, "HEAD"), "utf8").trim();
    const revision = head.startsWith("ref:") ? readRef(gitDir, head.slice(4).trim()) : head;

    if (!revision) {
        return null;
    }
    return {revision, "pushed": readPushedRevisions(gitDir).has(revision)};
};

const resolveCommit = () => {
    // Deployments built without the .git directory (e.g. from a tarball or a Docker
    // image) can supply the revision through the environment instead
    if (process.env.GIT_COMMIT) {
        return {"revision": process.env.GIT_COMMIT.trim(), "pushed": true};
    }
    try {
        const fromFiles = readRevisionFromGitDir();

        if (fromFiles) {
            return fromFiles;
        }
    } catch (e) {
        // No .git here; fall through to the command, then give up
    }
    try {
        return {"revision": execSync("git rev-parse HEAD", {"cwd": ROOT, "stdio": ["ignore", "pipe", "ignore"]}).toString().trim(), "pushed": false};
    } catch (e) {
        console.warn("Escapp: could not resolve the git revision. Set GIT_COMMIT to show it on the about page.");
        return {"revision": null, "pushed": false};
    }
};

// Resolved once at startup: neither the version nor the deployed revision change while the process runs
const {revision: commit, pushed} = resolveCommit();

module.exports = {
    version,
    commit,
    "shortCommit": commit ? commit.slice(0, 8) : null,
    "projectReference": PROJECT_REFERENCE,
    "repositoryUrl": REPOSITORY_URL,
    "releasesUrl": `${REPOSITORY_URL}/releases`,
    // Only linkable when the revision is known to exist on a remote
    "commitUrl": commit && pushed ? `${REPOSITORY_URL}/commit/${commit}` : null,
    "wikiUrl": `${REPOSITORY_URL}/wiki`
};
