import fs from "fs";
import path from "path";

const SRC = "src";
const DEST = "build";

fs.rmSync(DEST, { recursive: true, force: true });
fs.mkdirSync(DEST);

function copyDir(src, dest) {
    fs.mkdirSync(dest, {recursive: true});
    for (const file of fs.readdirSync(src)) {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);

        if (fs.statSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyDir(SRC, DEST);
fs.copyFileSync("manifest.json", path.join(DEST, "manifest.json"));

console.log("Build complete.");