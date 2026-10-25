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

// Read the revision out of git's own files. Unlike running `git`, this does not
// depend on the binary being on PATH, nor on the repository passing git's
// ownership check, which fails when the server runs as another user (sudo, pm2).
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

    try {
        return fs.readFileSync(path.join(gitDir, ref), "utf8").trim();
    } catch (e) {
        // The ref has been packed away by `git gc`
        const packed = fs.readFileSync(path.join(gitDir, "packed-refs"), "utf8");
        const line = packed.split("\n").find((l) => l.endsWith(` ${ref}`));

        return line ? line.split(" ")[0] : null;
    }
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
