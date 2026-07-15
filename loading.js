(function() {
  const overlay = document.getElementById("initial-loading-overlay");
  if (!overlay) return;
  let hasLoaded = false;
  try {
    hasLoaded = !!sessionStorage.getItem("hasLoadedBefore");
  } catch (_) {}
  if (hasLoaded) {
    overlay.style.display = "none";
    overlay.style.opacity = "0";
    return;
  }
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.session) {
    chrome.storage.session.get(["hasLoadedBefore"], function(result) {
      if (result && result.hasLoadedBefore) {
        overlay.style.display = "none";
        overlay.style.opacity = "0";
      }
    });
  }
})();


