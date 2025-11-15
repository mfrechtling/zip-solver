console.log("Hello World Extension: background script loaded.");

browser.runtime.onInstalled.addListener(() => {
    console.log("Extension installed.");
});