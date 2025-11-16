
const path = require("path");
const fsp = require("fs/promises");


const DEFAULT_BASE = path.join(process.cwd(), "uploads");

exports.toArray = (x) => Array.isArray(x) ? x : x ? [x] : [];

exports.statSafe = async (p) => {
    try {
        return await fsp.stat(p);
    } catch (err) {
        return null;
    }
};

 

exports.resolveUnder = (baseDir, p) => {
    // if (!p || typeof p !== "string") {
    //     return null;
    // }
    // const normalized = path.normalize(p);
    // console.log(normalized)
    // const abs = path.isAbsolute(normalized)
    //     ? normalized
    //     : path.resolve(baseDir, normalized);
    // const baseResolved = path.resolve(baseDir);

    // if (!abs.startsWith(baseResolved + path.sep) && abs !== baseResolved) {
    //     return null;
    // }
    return baseDir;
};

exports.zipEntryPath = (zipRoot, absPath, baseDir) => {
    const baseResolved = path.resolve(baseDir);
    const clean = path.resolve(absPath);
    const rel = clean.startsWith(baseResolved + path.sep)
        ? path.relative(baseResolved, clean)
        : path.basename(clean);

    return path.join(zipRoot, rel);
};

exports.addPath = async (archive, absPath, zipRoot, baseDir) => {
    const st = await exports.statSafe(absPath);

    if (!st) {
        return;
    }
    if (st.isDirectory()) {
        const entryRoot = exports.zipEntryPath(zipRoot, absPath, baseDir);

        archive.directory(absPath, entryRoot);
    } else {
        archive.file(absPath, { "name": exports.zipEntryPath(zipRoot, absPath, baseDir) });
    }
};

exports.collectAssetEntries = (node, prefix = []) => {
    const out = [];
    const push = (s) => {
        if (typeof s === "string" && s.trim()) {
            out.push({ "relKeys": prefix, "pathStr": s });
        }
    };

    if (typeof node === "string") {
        push(node);
    } else if (Array.isArray(node)) {
        for (const item of node) {
            if (typeof item === "string") {
                push(item);
            } else if (item && typeof item === "object") {
                out.push(...exports.collectAssetEntries(item, prefix));
            }
        }
    } else if (node && typeof node === "object") {
        for (const [k, v] of Object.entries(node)) {
            out.push(...exports.collectAssetEntries(v, [...prefix, k]));
        }
    }
    return out;
};
