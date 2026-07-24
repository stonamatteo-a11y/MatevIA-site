(() => {
  const cards = Array.from(document.querySelectorAll('.product-module'));
  if (!cards.length) return;

  const configs = [
    { type: 'orx', label: 'Decision chain', value: 'Approval richiesta', detail: 'Risk score 0.18 · policy verified' },
    { type: 'ai', label: 'Capability routing', value: 'Model route updated', detail: 'Local runtime · boundary active' },
    { type: 'core', label: 'MatevIA Core', value: 'Nuova approval', detail: '1 attività richiede revisione' },
    { type: 'dex', label: 'DEX event stream', value: 'Evento macchina ricevuto', detail: 'cnc-03 · stato sincronizzato' },
    { type: 'enx', label: 'Energy context', value: 'Consumo 184.6 kW', detail: 'Vincolo energetico aggiornato' }
  ];

  cards.slice(0, configs.length).forEach((card, index) => {
    const screen = card.querySelector('.product-screen');
    if (!screen || screen.querySelector('.product-live-overlay')) return;
    const config = configs[index];
    const overlay = document.createElement('span');
    overlay.className = `product-live-overlay is-${config.type}`;
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
      <span class="product-live-dot"></span>
      <span class="product-live-copy">
        <small>${config.label}</small>
        <strong>${config.value}</strong>
        <em>${config.detail}</em>
      </span>
      <span class="product-live-signal"><i></i><i></i><i></i></span>`;
    screen.appendChild(overlay);
  });
})();