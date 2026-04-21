(function () {
  var CONSENT_KEY = 'matevia-thirdparty-consent-v1';
  var DECISIONS = { granted: 'granted', denied: 'denied' };
  var CHANGE_EVENT = 'matevia-consent-changed';

  function readDecision() {
    try {
      return localStorage.getItem(CONSENT_KEY) || '';
    } catch (_) {
      return '';
    }
  }

  function writeDecision(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (_) {
      // Ignore storage blocked scenarios.
    }
  }

  function hasConsent() {
    return readDecision() === DECISIONS.granted;
  }

  function emitChange(granted) {
    document.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: { granted: !!granted } }));
  }

  function removeBanner() {
    var existing = document.getElementById('matevia-consent-banner');
    if (existing) {
      existing.remove();
    }
  }

  function buildBanner() {
    if (document.getElementById('matevia-consent-banner')) {
      return;
    }

    var banner = document.createElement('aside');
    banner.id = 'matevia-consent-banner';
    banner.className = 'cookie-consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Preferenze cookie');
    banner.setAttribute('aria-live', 'polite');
    banner.innerHTML =
      '<p class="cookie-consent-text">Per abilitare traduzione automatica e analytics usiamo servizi Google che possono impostare cookie di terze parti.</p>' +
      '<div class="cookie-consent-actions">' +
      '<button type="button" class="cookie-btn cookie-btn-primary" data-consent-accept>Accetta</button>' +
      '<button type="button" class="cookie-btn" data-consent-deny>Rifiuta</button>' +
      '<a class="cookie-link" href="/cookie-policy.html">Cookie policy</a>' +
      '</div>';

    var acceptBtn = banner.querySelector('[data-consent-accept]');
    var denyBtn = banner.querySelector('[data-consent-deny]');

    acceptBtn.addEventListener('click', function () {
      writeDecision(DECISIONS.granted);
      removeBanner();
      emitChange(true);
    });

    denyBtn.addEventListener('click', function () {
      writeDecision(DECISIONS.denied);
      removeBanner();
      emitChange(false);
    });

    document.body.appendChild(banner);
  }

  function maybeShowBanner() {
    if (readDecision()) {
      return;
    }
    buildBanner();
  }

  window.MateviaConsent = {
    hasConsent: hasConsent,
    openConsentBanner: buildBanner,
    onChange: function (handler) {
      document.addEventListener(CHANGE_EVENT, function (event) {
        handler(!!(event && event.detail && event.detail.granted));
      });
    }
  };

  document.addEventListener('DOMContentLoaded', maybeShowBanner);
})();
