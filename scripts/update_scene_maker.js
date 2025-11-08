const SCENE_MAKER_ORIGIN_PATH = "../../scene_maker";
const SCENE_MAKER_DESTINATION_PATH = "../public/scene_maker";

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const { exec } = require("child_process");

async function runCommand(command, cwd) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) return reject(error);
      console.log(stdout);
      console.error(stderr);
      resolve();
    });
  });
}

async function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    await fsp.rm(dirPath, { recursive: true, force: true });
  }
}

async function copyDir(src, dest) {
  await fsp.mkdir(dest, { recursive: true });

  const entries = await fsp.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fsp.copyFile(srcPath, destPath);
    }
  }
}

async function getHTMLContent(filePath) {
  const content = await fsp.readFile(filePath, "utf8");

  const startMarker = "<!-- Copy HTML from here -->";
  const endMarker = "<!-- Copy HTML until here -->";

  const start = content.indexOf(startMarker);
  const end = content.indexOf(endMarker);

  if (start === -1 || end === -1) {
    throw new Error("❌ No start and end markers were found in " + filePath);
  }

  const extracted = content
    .substring(start + startMarker.length, end)
    .trim();

  return extracted;
}

async function getCSSFiles(dir) {
  let cssFiles = [];
  const entries = await fsp.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const sub = await getCSSFiles(fullPath);
      cssFiles = cssFiles.concat(sub);
    } else if (entry.isFile() && entry.name.endsWith(".css")) {
      cssFiles.push(fullPath);
    }
  }

  return cssFiles;
}

async function updateCSSFiles(targetPath) {
  const cssFilesToPatch = await getCSSFiles(targetPath);

  for (const filePath of cssFilesToPatch) {
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  CSS file not found: ${filePath}`);
      continue;
    }

    let content = await fsp.readFile(filePath, "utf8");
    content = content.replace(/\/images\//g, "/scene_maker/images/");
    content = content.replace(/\/fonts\//g, "/scene_maker/fonts/");
    content = content.replace(/\/libs\/font-awesome\/font\//g, "/scene_maker/fonts/");

    await fsp.writeFile(filePath, content, "utf8");
  }
}

async function updateSceneMaker() {
  const sceneMakerPath = path.join(__dirname, SCENE_MAKER_ORIGIN_PATH);
  const distPath = path.join(sceneMakerPath, "dist");
  const targetPath = path.join(__dirname, SCENE_MAKER_DESTINATION_PATH);

  if (!fs.existsSync(sceneMakerPath)) {
    throw new Error(`❌ Scene Maker was not found in the following folder: ${sceneMakerPath}`);
  }
  console.log("✅ Scene Maker found.");

  console.log("Scene Maker build");
  await runCommand("npm run build", sceneMakerPath);

  if (!fs.existsSync(distPath)) {
    throw new Error("❌ Dist folder not found in Scene Maker folder.");
  }
  console.log("✅ Scene Maker build completed.");

  console.log("📦 Copy Scene Maker build to " + targetPath);
  await removeDir(targetPath);
  await copyDir(distPath, targetPath);

  console.log("Copy Scene Maker assets");

  //Images
  const imagesSrcDir = path.join(sceneMakerPath, "images");
  const imagesDestDir = path.join(targetPath, "images");
  await fsp.mkdir(imagesDestDir, { recursive: true });
  await copyDir(imagesSrcDir, imagesDestDir);
  console.log("✅ Scene Maker images.");

  //Fonts
  const fontsFiles = [
    "fonts/lato1.woff2",
    "fonts/lato2.woff2",
    "fonts/Lato_License.txt",
    "libs/font-awesome/font/fontawesome-webfont.woff",
    "libs/font-awesome/font/fontawesome-webfont.ttf"
  ];

  const fontDestDir = path.join(targetPath, "fonts");
  await fsp.mkdir(fontDestDir, { recursive: true });

  for (const relativeFontFilePath of fontsFiles) {
    const src = path.join(sceneMakerPath, relativeFontFilePath);
    const dest = path.join(fontDestDir, path.basename(relativeFontFilePath));
    await fsp.copyFile(src, dest);
    console.log(`✅ Copied font asset: ${relativeFontFilePath}`);
  }
  console.log("✅ Scene Maker fonts.");

  console.log("Copy HTML files");
  const editorHTMLFileSrcPath = path.join(sceneMakerPath, "editor.html");
  const editorHTMLFileDestPath = path.join(__dirname, "../views/scenes/_editor.ejs");
  let editorHTML = await getHTMLContent(editorHTMLFileSrcPath);
  editorHTML = editorHTML.replace(/\/images\//g, "/scene_maker/images/");
  await fsp.writeFile(editorHTMLFileDestPath, editorHTML, "utf8");
  console.log("✅ Scene Maker Editor HTML saved to:", editorHTMLFileDestPath);

  const viewerHTMLFileSrcPath = path.join(sceneMakerPath, "viewer.html");
  const viewerHTMLFileDestPath = path.join(__dirname, "../views/scenes/_viewer.ejs");
  let viewerHTML = await getHTMLContent(viewerHTMLFileSrcPath);
  viewerHTML = viewerHTML.replace(/\/images\//g, "/scene_maker/images/");
  await fsp.writeFile(viewerHTMLFileDestPath, viewerHTML, "utf8");
  console.log("✅ Scene Maker Viewer HTML saved to:", viewerHTMLFileDestPath);

  console.log("Change paths in CSS files");
  await updateCSSFiles(targetPath);

  console.log("✅ Task successfully completed");
}

updateSceneMaker().catch(err => {
  console.error("❌ Error:", err);
  process.exit(1);
});