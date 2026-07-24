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
      status: 'Origine verificata',
      mode: 'request',
      rows: [
        ['Richiedente', 'Responsabile Qualità'],
        ['Periodo', 'Ultimi 30 giorni'],
        ['Priorità', 'Alta'],
        ['Origine', 'MatevIA Workspace']
      ]
    },
    {
      eyebrow: '02 · Contesto costruito',
      title: 'Dati e vincoli correlati',
      summary: 'AI Cognitive e ORX raccolgono le informazioni necessarie senza avviare alcuna azione operativa.',
      status: 'Contesto versionato',
      mode: 'context',
      rows: [
        ['ERP', 'Ordini e fornitori del periodo'],
        ['MES', 'Lotti, lavorazioni e non conformità'],
        ['Documenti', 'Procedure ISO e verbali qualità'],
        ['Ruolo', 'Autorizzazione report confermata'],
        ['Policy', 'Audit retention v3.2']
      ]
    },
    {
      eyebrow: '03 · Dry-run',
      title: 'Simulazione della generazione',
      summary: 'Il piano viene verificato prima dell’esecuzione per identificare dati mancanti, conflitti e informazioni sensibili.',
      status: 'Nessun effetto reale',
      mode: 'simulation',
      rows: [
        ['Fonti raggiungibili', '5 su 5'],
        ['Record analizzati', '1.248'],
        ['Dati mancanti', '0 bloccanti'],
        ['Impatto operativo', 'Nessuna modifica ai sistemi'],
        ['Esito', 'Pronto per il gate']
      ]
    },
    {
      eyebrow: '04 · Governance gate',
      title: 'Policy e approvazione',
      summary: 'ORX applica le regole aziendali e determina responsabilità, limiti e livello di autorizzazione necessario.',
      status: 'Approvazione registrata',
      mode: 'approval',
      rows: [
        ['Policy applicata', 'ISO Audit Report v3.2'],
        ['Classificazione', 'Uso interno riservato'],
        ['Rischio', 'Medio-basso'],
        ['Approvazione', 'Responsabile Qualità'],
        ['Direzione', 'Non richiesta']
      ]
    },
    {
      eyebrow: '05 · Dispatch controllato',
      title: 'Generazione autorizzata',
      summary: 'ORX invia esclusivamente il task approvato al servizio autorizzato, mantenendo invariato il perimetro concordato.',
      status: 'Comando controllato',
      mode: 'dispatch',
      rows: [
        ['Destinazione', 'Audit Report Service'],
        ['Formato', 'PDF firmato + evidence JSON'],
        ['Ambiente', 'Tenant aziendale isolato'],
        ['Scritture ERP/MES', 'Non consentite'],
        ['Stato', 'Task completato']
      ]
    },
    {
      eyebrow: '06 · Governance evidence',
      title: 'Decisione completamente ricostruibile',
      summary: 'Ogni passaggio resta collegato in una timeline verificabile, dalla richiesta iniziale fino alla consegna del report.',
      status: 'Audit trail completo',
      mode: 'evidence',
      timeline: [
        ['13:42:10', 'Richiesta ricevuta'],
        ['13:42:13', 'Contesto costruito'],
        ['13:42:17', 'Dry-run completato'],
        ['13:42:24', 'Approvazione registrata'],
        ['13:42:28', 'Dispatch autorizzato'],
        ['13:42:31', 'Report ed evidence archiviati']
      ]
    }
  ];

  const panel = document.createElement('aside');
  panel.className = 'workflow-detail workflow-window';
  panel.dataset.workflowDetail = '';
  panel.id = 'workflow-detail-panel';
  panel.setAttribute('aria-live', 'polite');
  panel.innerHTML = `
    <div class="workflow-window-bar">
      <div class="workflow-window-dots" aria-hidden="true"><i></i><i></i><i></i></div>
      <span>MatevIA Console · Governed workflow simulation</span>
      <strong data-workflow-status></strong>
    </div>
    <div class="workflow-window-layout">
      <aside class="workflow-window-nav" aria-label="Fasi della simulazione">
        <div class="workflow-window-logo">Matev<span>IA</span></div>
        <div data-workflow-nav></div>
      </aside>
      <div class="workflow-window-main">
        <div class="workflow-detail-head">
          <span data-workflow-eyebrow></span>
          <em data-workflow-mode></em>
        </div>
        <h3 data-workflow-title></h3>
        <p data-workflow-summary></p>
        <div class="workflow-detail-body" data-workflow-body></div>
        <p class="workflow-detail-hint">Passa sugli altri step oppure selezionali per seguire l'intero processo.</p>
      </div>
    </div>`;
  track.insertAdjacentElement('afterend', panel);

  const eyebrow = panel.querySelector('[data-workflow-eyebrow]');
  const title = panel.querySelector('[data-workflow-title]');
  const summary = panel.querySelector('[data-workflow-summary]');
  const status = panel.querySelector('[data-workflow-status]');
  const mode = panel.querySelector('[data-workflow-mode]');
  const body = panel.querySelector('[data-workflow-body]');
  const nav = panel.querySelector('[data-workflow-nav]');

  nav.innerHTML = scenarios.map((scenario, index) => `<button type="button" data-workflow-nav-index="${index}"><span>${String(index + 1).padStart(2, '0')}</span>${scenario.title}</button>`).join('');
  const navButtons = Array.from(nav.querySelectorAll('button'));

  const renderCards = (scenario) => `<dl class="workflow-detail-grid">${scenario.rows.map(([label, value], index) => `<div style="--workflow-delay:${index * 70}ms"><dt>${label}</dt><dd>${value}</dd><span class="workflow-card-state">${scenario.mode === 'context' || scenario.mode === 'approval' ? 'Verificato' : scenario.mode === 'simulation' ? 'Simulato' : scenario.mode === 'dispatch' ? 'Autorizzato' : 'Ricevuto'}</span></div>`).join('')}</dl>`;
  const renderTimeline = (scenario) => `<ol class="workflow-detail-timeline">${scenario.timeline.map(([time, label], index) => `<li style="--workflow-delay:${index * 90}ms"><time>${time}</time><span>${label}</span><i aria-hidden="true"></i></li>`).join('')}</ol>`;

  const render = (index) => {
    const scenario = scenarios[index];
    if (!scenario) return;

    steps.forEach((step, stepIndex) => {
      const active = stepIndex === index;
      const complete = stepIndex < index;
      step.classList.toggle('is-selected', active);
      step.classList.toggle('is-complete', complete);
      step.setAttribute('aria-expanded', active ? 'true' : 'false');
    });
    navButtons.forEach((button, buttonIndex) => button.classList.toggle('is-active', buttonIndex === index));

    panel.className = `workflow-detail workflow-window is-changing mode-${scenario.mode}`;
    eyebrow.textContent = scenario.eyebrow;
    title.textContent = scenario.title;
    summary.textContent = scenario.summary;
    status.textContent = scenario.status;
    mode.textContent = scenario.mode === 'simulation' ? 'DRY-RUN' : scenario.mode.toUpperCase();
    body.innerHTML = scenario.timeline ? renderTimeline(scenario) : renderCards(scenario);
  };

  steps.forEach((step, index) => {
    step.tabIndex = 0;
    step.setAttribute('role', 'button');
    step.setAttribute('aria-controls', panel.id);
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

  navButtons.forEach((button, index) => button.addEventListener('click', () => render(index)));
  render(0);
})();