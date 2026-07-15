/* Developed by Shihab Miah @ BetaFloor | MapLeadr v5.4.2 */
/**
 * MapLeadr - Data Formatter
 * 
 * Strategy: Intercept chrome.storage.local and chrome messaging
 * to transform data whenever the UI/background reads leads.
 * 
 * Uses EXACT key names from the real scraped data format.
 */
(function () {
    // --- Global Data Export Override ---
    const _origObjectKeys = Object.keys;
    const IMPORTANT_EXPORT_KEYS = [
      "id", "Keyword", "Name", "First_category", "Sub_Title", "Website", 
      "Phone_Standard_format", "Email_From_WEBSITE", "GMB_URL", "Full_Address", 
      "City", "State", "Zip", "Average_rating", "Reviews_count", "Business_Status", "Hours"
    ];
    Object.keys = function(obj) {
      const keys = _origObjectKeys(obj);
      if (keys.length > 25 && keys.includes("id") && keys.includes("Keyword") && keys.includes("Name") && keys.includes("Full_Address")) {
        return IMPORTANT_EXPORT_KEYS;
      }
      return keys;
    };

    // ─── EXACT FIELD MAP ────────────────────────────────────────────────────────
    const RAW_TO_DISPLAY = {
        "Name": "Company/Business Name",
        "name": "Company/Business Name",

        "Phone_1": "Phone Number (1 & 2)",
        "Phone 1": "Phone Number (1 & 2)",
        "Phone_2": "Phone Number (1 & 2)",
        "Phone 2": "Phone Number (1 & 2)",
        "Phone_Standard_format": "Phone Number (1 & 2)",
        "Phone Standard format": "Phone Number (1 & 2)",
        "phone": "Phone Number (1 & 2)",

        "Email_From_WEBSITE": "Email Address",
        "Email From WEBSITE": "Email Address",
        "Email": "Email Address",

        "Phone_From_WEBSITE": null,
        "Phone From WEBSITE": null,

        "Website": "Website URL",
        "website": "Website URL",

        "Full_Address": "Full Address",
        "Full Address": "Full Address",
        "Street_Address": "Full Address",
        "Street Address": "Full Address",

        "City": "City",
        "city": "City",

        "State": "State",
        "state": "State",

        "Zip": "Zip Code",
        "Zip_Code": "Zip Code",
        "Zip Code": "Zip Code",
        "zipcode": "Zip Code",

        "Country": "Country",
        "country": "Country",

        "Average_rating": "Rating (Stars)",
        "Average rating": "Rating (Stars)",
        "rating": "Rating (Stars)",

        "Reviews_count": "Review Count",
        "Reviews count": "Review Count",
        "reviews_count": "Review Count",

        "First_category": "Category / Industry",
        "First category": "Category / Industry",
        "Second_category": null,
        "Second category": null,

        "Facebook URL": "Facebook Link",
        "Facebook": "Facebook Link",
        "facebook": "Facebook Link",

        "Instagram URL": "Instagram Link",
        "Instagram": "Instagram Link",
        "instagram": "Instagram Link",

        "Twitter URL": "Twitter (X) Link",
        "Twitter": "Twitter (X) Link",
        "twitter": "Twitter (X) Link",

        "Linkedin URL": "LinkedIn Link",
        "Linkedin": "LinkedIn Link",
        "LinkedIn": "LinkedIn Link",
        "linkedin": "LinkedIn Link",

        "Google_Maps_URL": "Google Maps URL",
        "Google Maps URL": "Google Maps URL",
        "google_maps_url": "Google Maps URL",

        "Image_URL": "Image/Logo URL",
        "Image URL": "Image/Logo URL",
        "image_url": "Image/Logo URL",

        "Claimed_google_my_business": "Claimed Status (Yes/No)",
        "Claimed google my business": "Claimed Status (Yes/No)",
        "claimed": "Claimed Status (Yes/No)",

        "Hours": "Working Hours",
        "hours": "Working Hours",
        "Working_Hours": "Working Hours",
        "Working Hours": "Working Hours"
    };
    const ORDERED_COLUMNS = [
        "Company/Business Name",
        "Google Maps URL",
        "Phone Number (1 & 2)",
        "Email Address",
        "Website URL",
        "Full Address",
        "City",
        "State",
        "Zip Code",
        "Country",
        "Rating (Stars)",
        "Review Count",
        "Category / Industry",
        "Facebook Link",
        "Instagram Link",
        "Twitter (X) Link",
        "LinkedIn Link",
        "Image/Logo URL",
        "Claimed Status (Yes/No)",
        "Working Hours"
    ];
    const LEAD_SIGNATURE_KEYS = new Set([
        "Name", "Phone_1", "Phone 1", "Full_Address", "Full Address", "City", "Country",
        "Average_rating", "Average rating", "Reviews_count", "Reviews count", "First_category", "First category",
        "Claimed_google_my_business", "Claimed google my business", "Hours", "Website",
        "Google_Maps_URL", "Google Maps URL", "Image_URL", "Image URL", "Facebook", "Facebook URL", "Instagram", "Instagram URL"
    ]);
    function isLeadObject(obj) {
        if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
        const keys = Object.keys(obj);
        if (keys.length < 3) return false;
        let hits = 0;
        for (const k of keys) {
            if (LEAD_SIGNATURE_KEYS.has(k)) hits++;
            if (hits >= 3) return true;
        }
        return false;
    }
    function formatLead(raw) {
        const out = {};
        for (const col of ORDERED_COLUMNS) out[col] = "";
        const phone1 = raw["Phone_1"] || raw["Phone 1"] || raw["phone"] || "";
        const phone2 = raw["Phone_2"] || raw["Phone 2"] || "";
        out["Phone Number (1 & 2)"] = phone2 ? `${phone1} / ${phone2}` : phone1;
        const rawWebsite = raw["Website"] || raw["website"] || "";
        if (rawWebsite && !rawWebsite.includes("google.com/maps") && !rawWebsite.includes("maps.app.goo.gl")) {
            out["Website URL"] = rawWebsite;
        }
        for (const [rawKey, displayName] of Object.entries(RAW_TO_DISPLAY)) {
            if (displayName === null) continue;
            if (displayName === "Phone Number (1 & 2)") continue;
            if (displayName === "Website URL") continue;
            if (out[displayName] !== "") continue;
            const val = raw[rawKey];
            if (val !== undefined && val !== null && String(val).trim() !== "" && String(val).trim() !== " ") {
                out[displayName] = val;
            }
        }
        for (const [k, v] of Object.entries(raw)) {
            if (!(k in out)) {
                try {
                    Object.defineProperty(out, k, {
                        value: v, enumerable: false, writable: true, configurable: true
                    });
                } catch (_) { }
            }
        }
        return out;
    }
    function processResult(result) {
        if (!result) return result;
        let modified = false;
        function traverse(obj) {
            if (!obj || typeof obj !== "object") return;

            if (Array.isArray(obj)) {
                if (obj.length > 0 && isLeadObject(obj[0])) {
                    for (let i = 0; i < obj.length; i++) {
                        if (isLeadObject(obj[i])) {
                            obj[i] = formatLead(obj[i]);
                            modified = true;
                        }
                    }
                } else {
                    for (let i = 0; i < obj.length; i++) {
                        traverse(obj[i]);
                    }
                }
            } else {
                for (const key of Object.keys(obj)) {
                    let val = obj[key];
                    if (typeof val === "string") {
                        // skip
                    } else if (Array.isArray(val)) {
                        if (val.length > 0 && isLeadObject(val[0])) {
                            obj[key] = val.map(formatLead);
                            modified = true;
                        } else {
                            traverse(val);
                        }
                    } else if (typeof val === "object") {
                        traverse(val);
                    }
                }
            }
        }
        try {
            traverse(result);
        } catch (e) {
            console.error("[LeadMagnet Formatter] processResult error:", e);
        }
        return result;
    }
    // ─── PATCH JSON.parse ───────────────────────────────────────────────────────
    const _origParse = JSON.parse;
    JSON.parse = function (text, reviver) {
        const result = _origParse(text, reviver);
        if (Array.isArray(result) && result.length > 0 && isLeadObject(result[0])) {
            return result.map(formatLead);
        }
        if (result && typeof result === "object") {
            try { processResult(result); } catch (e) { }
        }
        return result;
    };
    // ─── PATCH CHROME MESSAGING ─────────────────────────────────────────────────
    if (typeof chrome !== "undefined" && chrome.runtime) {
        if (chrome.runtime.onMessage) {
            const _origOnMessage = chrome.runtime.onMessage.addListener.bind(chrome.runtime.onMessage);
            chrome.runtime.onMessage.addListener = function (listener) {
                _origOnMessage(function (message, sender, sendResponse) {
                    try { processResult(message); } catch (e) { }
                    return listener(message, sender, sendResponse);
                });
            };
        }
        if (chrome.runtime.sendMessage) {
            const _origSendMessage = chrome.runtime.sendMessage.bind(chrome.runtime);
            chrome.runtime.sendMessage = function (...args) {
                const lastArg = args[args.length - 1];
                if (typeof lastArg === "function") {
                    args[args.length - 1] = function (response) {
                        try { processResult(response); } catch (e) { }
                        return lastArg(response);
                    };
                    return _origSendMessage(...args);
                } else {
                    const res = _origSendMessage(...args);
                    if (res && res.then) {
                        return res.then(response => {
                            try { processResult(response); } catch (e) { }
                            return response;
                        });
                    }
                    return res;
                }
            };
        }
    }
    // ─── PATCH chrome.storage.local ─────────────────────────────────────────────
    if (typeof chrome === "undefined" || !chrome.storage || !chrome.storage.local) return;
    const _origGet = chrome.storage.local.get.bind(chrome.storage.local);
    chrome.storage.local.get = function (keys, callback) {
        if (typeof keys === "function") { callback = keys; keys = null; }
        if (typeof callback === "function") {
            _origGet(keys, function (result) {
                processResult(result);
                callback(result);
            });
        } else {
            return _origGet(keys).then(result => {
                processResult(result);
                return result;
            });
        }
    };
    const _origSet = chrome.storage.local.set.bind(chrome.storage.local);
    chrome.storage.local.set = function (items, callback) {
        if (typeof callback === "function") {
            return _origSet(items, callback);
        } else {
            return _origSet(items);
        }
    };
    const _origOnChanged = chrome.storage.onChanged.addListener.bind(chrome.storage.onChanged);
    chrome.storage.onChanged.addListener = function (listener) {
        _origOnChanged(function (changes, areaName) {
            if (areaName === "local") {
                try {
                    for (const key of Object.keys(changes)) {
                        if (changes[key] && changes[key].newValue) {
                            const nv = changes[key].newValue;
                            if (Array.isArray(nv) && nv.length > 0 && isLeadObject(nv[0])) {
                                changes[key] = {
                                    ...changes[key],
                                    newValue: nv.map(formatLead)
                                };
                            } else if (typeof nv === "object") {
                                processResult(nv);
                            }
                        }
                    }
                } catch (e) {
                    console.error("[LeadMagnet Formatter] onChanged error:", e);
                }
            }
            listener(changes, areaName);
        });
    };
    console.log("[LeadMagnet Formatter] v5.4.2 — Data interceptor active.");
})();