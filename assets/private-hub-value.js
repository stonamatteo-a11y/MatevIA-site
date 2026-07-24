(() => {
  const workflow = document.querySelector('.private-hub-workflow');
  if (!workflow || document.querySelector('.private-hub-value')) return;

  const icon = (type) => {
    const paths = {
      integration: '<path d="M5 7h5v5H5zM14 5h5v5h-5zM14 14h5v5h-5zM7.5 12v3.5H14M10 9.5h4"/>',
      governance: '<path d="M12 3l7 3v5c0 4.7-2.8 8-7 10-4.2-2-7-5.3-7-10V6l7-3z"/><path d="M9 12l2 2 4-5"/>',
      complexity: '<path d="M4 7h6M14 7h6M7 4v6M17 4v6M4 17h6M14 17h6M7 14v6M17 14v6"/><path d="M10 7h4v10h-4z"/>',
      modular: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4z"/><path d="M16.5 14v6M13.5 17h6"/>',
      market: '<path d="M4 19V9M10 19V5M16 19v-7M22 19V3"/><path d="M3 19h20"/>',
      architecture: '<path d="M4 8l8-4 8 4-8 4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4"/>',
      scale: '<path d="M5 19L19 5M10 5h9v9"/><path d="M5 9v10h10"/>',
      ecosystem: '<circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 7.5l3 3M17 7.5l-3 3M7 16.5l3-3M17 16.5l-3-3"/>'
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">${paths[type] || paths.integration}</svg>`;
  };

  const item = (type, title, text) => `
    <article class="value-item">
      <div class="value-icon">${icon(type)}</div>
      <div><h4>${title}</h4><p>${text}</p></div>
    </article>`;

  const section = document.createElement('section');
  section.className = 'private-hub-value';
  section.setAttribute('aria-labelledby', 'private-hub-value-title');
  section.innerHTML = `
    <div class="value-intro">
      <p class="private-hub-eyebrow">Valore per il mercato</p>
      <h2 id="private-hub-value-title">Perché scegliere MatevIA</h2>
      <p>MatevIA non aggiunge un altro strumento isolato. Introduce un livello di governance capace di coordinare sistemi, persone, AI e processi mantenendo controllo, tracciabilità e libertà di evoluzione.</p>
    </div>

    <div class="value-audiences">
      <section class="value-audience" aria-labelledby="value-companies-title">
        <div class="value-audience-head">
          <span>01</span>
          <div><p>Per potenziali clienti</p><h3 id="value-companies-title">Valore concreto per le aziende</h3></div>
        </div>
        <div class="value-list">
          ${item('integration', 'Integra ciò che esiste', 'Collega ERP, MES, documenti, database, API, impianti e sistemi energetici senza imporre la sostituzione degli investimenti già effettuati.')}
          ${item('governance', 'Mantiene il controllo', 'L’AI prepara, interpreta e propone. ORX applica policy, ruoli, approvazioni e responsabilità prima di qualsiasi effetto operativo.')}
          ${item('complexity', 'Riduce la complessità operativa', 'Unifica il contesto distribuito tra uffici, produzione e direzione, riducendo ricostruzioni manuali, duplicazioni e passaggi informali.')}
          ${item('modular', 'Cresce in modo modulare', 'Il nucleo minimo può essere esteso con Core, DEX ed ENX soltanto quando il perimetro operativo lo richiede.')}
        </div>
      </section>

      <section class="value-audience is-investor" aria-labelledby="value-investors-title">
        <div class="value-audience-head">
          <span>02</span>
          <div><p>Per investitori e partner</p><h3 id="value-investors-title">Una piattaforma costruita per espandersi</h3></div>
        </div>
        <div class="value-list">
          ${item('market', 'Mercati convergenti', 'Digitalizzazione industriale, AI enterprise, automazione e governance stanno convergendo verso infrastrutture capaci di coordinare l’intero contesto operativo.')}
          ${item('architecture', 'Architettura differenziante', 'ORX separa in modo netto intelligence, decisione, approvazione ed esecuzione, creando un modello governance-first difficile da replicare con applicazioni tradizionali.')}
          ${item('scale', 'Scalabilità enterprise', 'L’architettura tenant-aware e modulare permette di partire da una PMI e crescere verso organizzazioni industriali più articolate senza cambiare modello operativo.')}
          ${item('ecosystem', 'Ecosistema estendibile', 'Nuovi moduli, capability e integrazioni possono essere aggiunti mantenendo invariato il kernel di governance e il principio di autorità centrale.')}
        </div>
      </section>
    </div>

    <div class="value-closing">
      <div class="value-closing-mark"><span>Matev</span><strong>IA</strong></div>
      <div class="value-closing-copy">
        <p class="private-hub-eyebrow">La visione</p>
        <h3>MatevIA non è un software.</h3>
        <p>È un’infrastruttura di orchestrazione enterprise progettata per coordinare persone, sistemi, intelligenza artificiale e processi attraverso un unico modello di governance.</p>
      </div>
      <div class="value-payoff" aria-label="Payoff MatevIA">
        <span>Una sola governance.</span>
        <span>Un unico ecosistema.</span>
        <strong>Infinite possibilità.</strong>
      </div>
    </div>`;

  workflow.insertAdjacentElement('afterend', section);
})();