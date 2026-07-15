chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  // Allow localhost and geobucket
  if (sender.url && (sender.url.includes("localhost") || sender.url.includes("127.0.0.1") || sender.url.includes("geobucket.com"))) {
    if (request.action === "GEO_BUCKET_PING") {
      sendResponse({ status: "installed", version: chrome.runtime.getManifest().version });
    }
  }
});
