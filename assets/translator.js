(() => {
  const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
  const BASE_LANG = "it";
  const DEFAULT_LANG = "it";
  const AUTO_SWITCH_FLAG = "matevia-lang-auto-switch";
  let translateLoaded = false;

  function hasConsent() {
    return !!(window.MateviaConsent && typeof window.MateviaConsent.hasConsent === "function" && window.MateviaConsent.hasConsent());
  }

  function readGoogTransLang() {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/);
    return match ? match[1] : DEFAULT_LANG;
  }

  function hasGoogTransCookie() {
    return /(?:^|;\s*)googtrans=/.test(document.cookie);
  }

  function detectBrowserLang() {
    const candidates = [
      ...(navigator.languages || []),
      navigator.language,
      navigator.userLanguage
    ]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase());

    if (candidates.some((value) => value.startsWith("en"))) {
      return "en";
    }

    return DEFAULT_LANG;
  }

  function persistGoogTrans(lang) {
    const value = `/${BASE_LANG}/${lang}`;
    const rootDomain = window.location.hostname;
    document.cookie = `googtrans=${value};path=/;max-age=${COOKIE_MAX_AGE}`;
    document.cookie = `googtrans=${value};path=/;domain=${rootDomain};max-age=${COOKIE_MAX_AGE}`;
  }

  function shouldSkipAutoSwitch() {
    try {
      return window.sessionStorage.getItem(AUTO_SWITCH_FLAG) === "1";
    } catch {
      return false;
    }
  }

  function markAutoSwitchDone() {
    try {
      window.sessionStorage.setItem(AUTO_SWITCH_FLAG, "1");
    } catch {
      // Ignore storage-blocked environments.
    }
  }

  function maybeAutoSwitchFromBrowserLang() {
    if (hasGoogTransCookie() || shouldSkipAutoSwitch()) {
      return false;
    }

    const preferredLang = detectBrowserLang();
    if (preferredLang === DEFAULT_LANG) {
      return false;
    }

    persistGoogTrans(preferredLang);
    markAutoSwitchDone();
    window.location.reload();
    return true;
  }

  function ensureTranslateScript() {
    if (translateLoaded || !hasConsent()) {
      return;
    }

    if (!document.getElementById("matevia-google-translate")) {
      const script = document.createElement("script");
      script.id = "matevia-google-translate";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    translateLoaded = true;
  }

  function initLanguageSelect() {
    const langSelect = document.querySelector("[data-lang-switch]");
    if (!langSelect) {
      return;
    }

    if (!hasConsent()) {
      langSelect.value = DEFAULT_LANG;
      langSelect.title = "Per usare la traduzione automatica accetta i cookie di terze parti.";
      langSelect.addEventListener("change", (event) => {
        const selectedLang = event.target.value || DEFAULT_LANG;
        if (selectedLang !== DEFAULT_LANG) {
          event.target.value = DEFAULT_LANG;
          if (window.MateviaConsent && typeof window.MateviaConsent.openConsentBanner === "function") {
            window.MateviaConsent.openConsentBanner();
          }
        }
      });
      return;
    }

    langSelect.value = readGoogTransLang();
    langSelect.addEventListener("change", (event) => {
      const selectedLang = event.target.value || DEFAULT_LANG;
      persistGoogTrans(selectedLang);
      markAutoSwitchDone();
      window.location.reload();
    });
  }

  window.googleTranslateElementInit = () => {
    if (!window.google?.translate?.TranslateElement || !hasConsent()) {
      return;
    }

    new window.google.translate.TranslateElement(
      {
        pageLanguage: BASE_LANG,
        autoDisplay: false,
        includedLanguages: "it,en"
      },
      "google_translate_element"
    );
  };

  function bootTranslator() {
    if (!hasConsent()) {
      initLanguageSelect();
      return;
    }

    if (maybeAutoSwitchFromBrowserLang()) {
      return;
    }

    initLanguageSelect();
    ensureTranslateScript();
  }

  document.addEventListener("DOMContentLoaded", () => {
    bootTranslator();

    if (window.MateviaConsent && typeof window.MateviaConsent.onChange === "function") {
      window.MateviaConsent.onChange((granted) => {
        if (granted) {
          markAutoSwitchDone();
          window.location.reload();
        }
      });
    }
  });
})();
