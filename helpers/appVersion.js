const {execSync} = require("child_process");
const path = require("path");
const {version} = require("../package.json");

const REPOSITORY_URL = "https://github.com/IGLUE-project/escapp";
const PROJECT_REFERENCE = "2024-1-ES01-KA220-HED-000256356";

const resolveCommit = () => {
    // Deployments built without the .git directory (e.g. from a tarball or a Docker
    // image) can supply the revision through the environment instead
    if (process.env.GIT_COMMIT) {
        return process.env.GIT_COMMIT.trim();
    }
    try {
        return execSync("git rev-parse HEAD", {"cwd": path.join(__dirname, ".."), "stdio": ["ignore", "pipe", "ignore"]}).toString().trim();
    } catch (e) {
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
