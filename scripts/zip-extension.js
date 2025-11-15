import {execSync} from "child_process"

try {
    execSync(`cd build && zip -r ../zip-solver-extension.zip .`, { stdio: "inherit" });
    console.log("ZIP created: zip-solver-extension.zip");
} catch (err) {
    console.error("ZIP failed", err);
}