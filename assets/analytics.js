(function () {
  var meta = document.querySelector('meta[name="matevia-ga4-id"]');
  if (!meta) return;

  var gaId = (meta.getAttribute('content') || '').trim();
  if (!/^G-[A-Z0-9]+$/i.test(gaId)) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
  document.head.appendChild(s);

  gtag('js', new Date());
  gtag('config', gaId, { anonymize_ip: true });
})();
