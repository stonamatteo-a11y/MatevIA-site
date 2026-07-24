(() => {
  const workflow = document.querySelector('.private-hub-workflow');
  if (!workflow || workflow.querySelector('[data-workflow-detail]')) return;

  const steps = Array.from(workflow.querySelectorAll('.workflow-step'));
  const track = workflow.querySelector('.workflow-track');
  if (!steps.length || !track) return;

  const scenarios = [
    {
      eyebrow: '01 · Richiesta ricevuta',
      title: 'Genera Audit Report ISO 9001',
      summary: 'Il Responsabile Qualità richiede il report degli ultimi 30 giorni tramite MatevIA Workspace.',
      rows: [
        ['Richiedente', 'Responsabile Qualità'],
        ['Periodo', 'Ultimi 30 giorni'],
        ['Priorità', 'Alta'],
        ['Origine', 'MatevIA Workspace']
      ],
      status: 'Origine verificata'
    },
    {
      eyebrow: '02 · Contesto costruito',
      title: 'Dati e vincoli correlati',
      summary: 'AI Cognitive e ORX raccolgono le informazioni necessarie senza avviare alcuna azione operativa.',
      rows: [
        ['ERP', 'Ordini e fornitori del periodo'],
        ['MES', 'Lotti, lavorazioni e non conformità'],
        ['Documenti', 'Procedure ISO e verbali qualità'],
        ['Ruolo', 'Autorizzazione report confermata'],
        ['Policy', 'Audit retention v3.2']
      ],
      status: 'Contesto versionato'
    },
    {
      eyebrow: '03 · Dry-run',
      title: 'Simulazione della generazione',
      summary: 'Il piano viene verificato prima dell’esecuzione per identificare dati mancanti, conflitti e informazioni sensibili.',
      rows: [
        ['Fonti raggiungibili', '5 su 5'],
        ['Record analizzati', '1.248'],
        ['Dati mancanti', '0 bloccanti'],
        ['Impatto operativo', 'Nessuna modifica ai sistemi'],
        ['Esito', 'Pronto per il gate']
      ],
      status: 'Nessun effetto reale'
    },
    {
      eyebrow: '04 · Governance gate',
      title: 'Policy e approvazione',
      summary: 'ORX applica le regole aziendali e determina responsabilità, limiti e livello di autorizzazione necessario.',
      rows: [
        ['Policy applicata', 'ISO Audit Report v3.2'],
        ['Classificazione', 'Uso interno riservato'],
        ['Rischio', 'Medio-basso'],
        ['Approvazione', 'Responsabile Qualità'],
        ['Direzione', 'Non richiesta']
      ],
      status: 'Approvazione registrata'
    },
    {
      eyebrow: '05 · Dispatch controllato',
      title: 'Generazione autorizzata',
      summary: 'ORX invia esclusivamente il task approvato al servizio autorizzato, mantenendo invariato il perimetro concordato.',
      rows: [
        ['Destinazione', 'Audit Report Service'],
        ['Formato', 'PDF firmato + evidence JSON'],
        ['Ambiente', 'Tenant aziendale isolato'],
        ['Scritture ERP/MES', 'Non consentite'],
        ['Stato', 'Task completato']
      ],
      status: 'Comando controllato'
    },
    {
      eyebrow: '06 · Governance evidence',
      title: 'Decisione completamente ricostruibile',
      summary: 'Ogni passaggio resta collegato in una timeline verificabile, dalla richiesta iniziale fino alla consegna del report.',
      timeline: [
        ['13:42:10', 'Richiesta ricevuta'],
        ['13:42:13', 'Contesto costruito'],
        ['13:42:17', 'Dry-run completato'],
        ['13:42:24', 'Approvazione registrata'],
        ['13:42:28', 'Dispatch autorizzato'],
        ['13:42:31', 'Report ed evidence archiviati']
      ],
      status: 'Audit trail completo'
    }
  ];

  const panel = document.createElement('aside');
  panel.className = 'workflow-detail';
  panel.dataset.workflowDetail = '';
  panel.setAttribute('aria-live', 'polite');
  panel.innerHTML = `
    <div class="workflow-detail-head">
      <span data-workflow-eyebrow></span>
      <strong data-workflow-status></strong>
    </div>
    <h3 data-workflow-title></h3>
    <p data-workflow-summary></p>
    <div class="workflow-detail-body" data-workflow-body></div>
    <p class="workflow-detail-hint">Passa sugli altri step oppure selezionali per seguire l'intero processo.</p>`;
  track.insertAdjacentElement('afterend', panel);

  const eyebrow = panel.querySelector('[data-workflow-eyebrow]');
  const title = panel.querySelector('[data-workflow-title]');
  const summary = panel.querySelector('[data-workflow-summary]');
  const status = panel.querySelector('[data-workflow-status]');
  const body = panel.querySelector('[data-workflow-body]');

  const render = (index) => {
    const scenario = scenarios[index];
    if (!scenario) return;

    steps.forEach((step, stepIndex) => {
      const active = stepIndex === index;
      step.classList.toggle('is-selected', active);
      step.setAttribute('aria-expanded', active ? 'true' : 'false');
    });

    panel.classList.remove('is-changing');
    void panel.offsetWidth;
    panel.classList.add('is-changing');

    eyebrow.textContent = scenario.eyebrow;
    title.textContent = scenario.title;
    summary.textContent = scenario.summary;
    status.textContent = scenario.status;

    if (scenario.timeline) {
      body.innerHTML = `<ol class="workflow-detail-timeline">${scenario.timeline.map(([time, label]) => `<li><time>${time}</time><span>${label}</span></li>`).join('')}</ol>`;
    } else {
      body.innerHTML = `<dl class="workflow-detail-grid">${scenario.rows.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>`;
    }
  };

  steps.forEach((step, index) => {
    step.tabIndex = 0;
    step.setAttribute('role', 'button');
    step.setAttribute('aria-controls', 'workflow-detail-panel');
    step.addEventListener('mouseenter', () => render(index));
    step.addEventListener('focus', () => render(index));
    step.addEventListener('click', () => render(index));
    step.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        render(index);
      }
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        steps[(index + 1) % steps.length].focus();
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        steps[(index - 1 + steps.length) % steps.length].focus();
      }
    });
  });

  panel.id = 'workflow-detail-panel';
  render(0);
})();