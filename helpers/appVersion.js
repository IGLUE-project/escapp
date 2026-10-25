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

// Read the revision out of git's own files. Unlike running `git`, this does not
// depend on the binary being on PATH, nor on the repository passing git's
// ownership check, which fails when the server runs as another user (sudo, pm2).
//
// We report the remote-tracking ref rather than the local HEAD: a commit that has
// not been pushed yet exists only on this machine, so linking to it on GitHub gives
// a 404. If there is no remote ref, fall back to HEAD.
const readRevisionFromGitDir = () => {
    const gitDir = resolveGitDir();

    if (!gitDir) {
        return null;
    }
    const head = fs.readFileSync(path.join(gitDir, "HEAD"), "utf8").trim();

    if (!head.startsWith("ref:")) {
        return head; // Detached HEAD holds the revision itself
    }
    const ref = head.slice(4).trim();
    const branch = ref.replace("refs/heads/", "");

    for (const candidate of [`refs/remotes/origin/${branch}`, "refs/remotes/origin/HEAD"]) {
        try {
            const pushed = readRef(gitDir, candidate);

            if (pushed) {
                return pushed;
            }
        } catch (e) {
            // Try the next candidate
        }
    }
    return readRef(gitDir, ref);
};

const resolveCommit = () => {
    // Deployments built without the .git directory (e.g. from a tarball or a Docker
    // image) can supply the revision through the environment instead
    if (process.env.GIT_COMMIT) {
        return process.env.GIT_COMMIT.trim();
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
        return execSync("git rev-parse HEAD", {"cwd": ROOT, "stdio": ["ignore", "pipe", "ignore"]}).toString().trim();
    } catch (e) {
        console.warn("Escapp: could not resolve the git revision. Set GIT_COMMIT to show it on the about page.");
        return null;
    }
};

// Resolved once at startup: neither the version nor the deployed revision change while the process runs
const commit = resolveCommit();

module.exports = {
    version,
    commit,
    "shortCommit": commit ? commit.slice(0, 8) : null,
    "projectReference": PROJECT_REFERENCE,
    "repositoryUrl": REPOSITORY_URL,
    "releasesUrl": `${REPOSITORY_URL}/releases`,
    "commitUrl": commit ? `${REPOSITORY_URL}/commit/${commit}` : null,
    "wikiUrl": `${REPOSITORY_URL}/wiki`
};
