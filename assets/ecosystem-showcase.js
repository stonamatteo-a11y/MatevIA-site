(() => {
  const root = document.querySelector('[data-private-hub-dynamic]');
  if (!root) return;

  const productCard = (label, title, description, image, alt, tags) => `
    <article class="product-module">
      <button class="product-screen" type="button" data-product-image="${image}" aria-label="Apri ${title}">
        <img src="${image}" alt="${alt}">
      </button>
      <div class="product-module-copy">
        <span class="product-module-label">${label}</span>
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="product-module-tags">${tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      </div>
    </article>`;

  root.innerHTML = `
    <section class="private-hub-architecture" aria-labelledby="architecture-title">
      <div class="architecture-heading">
        <div class="private-hub-section-heading">
          <p class="private-hub-eyebrow">Architettura completa</p>
          <h2 id="architecture-title">Un kernel di governance. Layer specializzati. Un solo contesto operativo.</h2>
          <p>ORX mantiene l'autorità decisionale e coordina AI, interfacce e moduli operativi senza sovrapporre responsabilità.</p>
        </div>
        <p class="architecture-note">Il nucleo minimo comprende ORX, AI Layer, AI Cognitive e MatevIA Console. Core, DEX ed ENX vengono attivati in base al perimetro del cliente.</p>
      </div>
      <div class="architecture-stage" aria-label="Architettura completa dell'ecosistema MatevIA">
        <span class="architecture-link link-ai" aria-hidden="true"></span>
        <span class="architecture-link link-cognitive" aria-hidden="true"></span>
        <span class="architecture-link link-console" aria-hidden="true"></span>
        <span class="architecture-link link-core" aria-hidden="true"></span>
        <span class="architecture-link link-dex" aria-hidden="true"></span>
        <span class="architecture-link link-enx" aria-hidden="true"></span>
        <div class="architecture-core"><div><strong>ORX</strong><span>Decision & governance kernel</span></div></div>
        <article class="architecture-node architecture-ai-layer is-minimum"><small>Nucleo minimo</small><h3>AI Layer</h3><p>Modelli, capability, routing e ciclo di vita delle AI locali.</p></article>
        <article class="architecture-node architecture-cognitive is-minimum"><small>Nucleo minimo</small><h3>AI Cognitive</h3><p>Osserva il contesto industriale e costruisce conoscenza in Shadow Mode.</p></article>
        <article class="architecture-node architecture-console is-minimum"><small>Nucleo minimo</small><h3>MatevIA Console</h3><p>Visualizza stati, decisioni, approvazioni ed evidence esposte da ORX.</p></article>
        <article class="architecture-node architecture-core-erp is-optional"><small>Layer attivabile</small><h3>MatevIA Core</h3><p>Workspace AI, orchestrazione aziendale e funzioni ERP native.</p></article>
        <article class="architecture-node architecture-dex is-optional"><small>Layer attivabile</small><h3>DEX</h3><p>Esecuzione industriale controllata delle attività autorizzate.</p></article>
        <article class="architecture-node architecture-enx is-optional"><small>Layer attivabile</small><h3>ENX</h3><p>Contesto energetico, indicatori, vincoli e raccomandazioni.</p></article>
        <div class="architecture-foundation"><span>On-premise</span><span>Tenant isolati</span><span>Policy versionate</span><span>Human approval</span><span>Audit trail</span></div>
      </div>

      <div class="private-hub-section-heading orx-audit-section-heading">
        <p class="private-hub-eyebrow">Evidenza verificabile</p>
        <h2>Audit ORX: governance verificata sul campo.</h2>
      </div>

      <article class="orx-audit-evidence" aria-labelledby="orx-audit-title">
        <header class="orx-audit-heading">
          <div>
            <p class="private-hub-eyebrow">Governance evidence · 23 luglio 2026</p>
            <h3 id="orx-audit-title">Il controllo resta attivo anche quando il contesto è degradato.</h3>
            <p>In un test ORX con DEX ed ENX, un dato energetico non aggiornato è stato riconosciuto, il piano è stato revisionato e nessun comando operativo è stato eseguito.</p>
          </div>
          <div class="orx-audit-outcome" aria-label="Esito della verifica di governance">
            <span>Esito governance</span>
            <strong>Vincoli rispettati</strong>
            <small>Dry-run tecnico: Partial</small>
          </div>
        </header>

        <div class="orx-audit-metrics" aria-label="Indicatori sintetici del test">
          <div><strong>3</strong><span>revisioni correlate</span></div>
          <div><strong>5</strong><span>dry-run registrati</span></div>
          <div><strong>1</strong><span>approvazione umana</span></div>
          <div class="is-zero"><strong>0</strong><span>comandi operativi</span></div>
        </div>

        <div class="orx-audit-table-wrap">
          <table class="orx-audit-table">
            <thead>
              <tr><th>Controllo verificato</th><th>Evidenza osservata</th><th>Risultato</th></tr>
            </thead>
            <tbody>
              <tr><td>Interpretazione AI</td><td>Accettata come input advisory prima della pianificazione, senza autorità decisionale.</td><td><span class="audit-state is-ok">Advisory rispettato</span></td></tr>
              <tr><td>Contesto operativo DEX</td><td>Stato delle macchine acquisito esclusivamente tramite capability in sola lettura.</td><td><span class="audit-state is-ok">Completato</span></td></tr>
              <tr><td>Contesto energetico ENX</td><td>Freshness identificata come <code>STALE</code>; evidenza mantenuta in stato degradato.</td><td><span class="audit-state is-warn">Degradato rilevato</span></td></tr>
              <tr><td>Revisione del piano</td><td>Tre revisioni correlate; feedback e lineage conservati senza sovrascrivere lo storico.</td><td><span class="audit-state is-ok">Tracciato</span></td></tr>
              <tr><td>Approvazione umana</td><td>Approvazione registrata senza estendere permessi o trasformare capability read-only.</td><td><span class="audit-state is-ok">Registrata</span></td></tr>
              <tr><td>Dispatch finale</td><td>Bloccato perché nessuna route selezionata esponeva capacità di scrittura.</td><td><span class="audit-state is-blocked">Impedito</span></td></tr>
              <tr><td>Effetti esterni</td><td>Nessun comando inviato a DEX, ENX, sistemi OT o altri componenti operativi.</td><td><span class="audit-state is-zero">Zero effetti</span></td></tr>
            </tbody>
          </table>
        </div>

        <section class="orx-audit-data" aria-labelledby="orx-audit-data-title">
          <div class="orx-audit-data-heading">
            <p class="private-hub-eyebrow">Data minimization</p>
            <h4 id="orx-audit-data-title">Audit mirato, non raccolta indiscriminata.</h4>
            <p>ORX registra esclusivamente le evidenze tecniche necessarie a ricostruire il processo decisionale, verificarne la governance e dimostrare il rispetto dei vincoli.</p>
          </div>
          <div class="orx-audit-table-wrap">
            <table class="orx-audit-table orx-audit-data-table">
              <thead>
                <tr><th>Dati registrati dall'audit</th><th>Dati non inseriti nell'audit</th></tr>
              </thead>
              <tbody>
                <tr><td>Esiti dei controlli di governance</td><td>Nomi e indirizzi email</td></tr>
                <tr><td>Revisioni del piano e relativi stati</td><td>Credenziali e password</td></tr>
                <tr><td>Approvazione umana tramite identificativo tecnico</td><td>Token di autenticazione</td></tr>
                <tr><td>Risultati tecnici del dry-run</td><td>Documenti e contenuti aziendali</td></tr>
                <tr><td>Stato del dispatch e numero di comandi eseguiti</td><td>Dati anagrafici dell'operatore</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer class="orx-audit-conclusion">
          <div><span aria-hidden="true">✓</span><p><strong>Separazione delle responsabilità verificata.</strong> L'approvazione del piano non ha aggirato i vincoli tecnici né autorizzato un'esecuzione non prevista.</p></div>
          <small>Sintesi anonimizzata di un audit ORX in ambiente di test. L'evidenza autorevole resta conservata in ORX. Nessuna esecuzione Live Canary è stata effettuata.</small>
        </footer>
      </article>
    </section>

    <section class="private-hub-products" aria-labelledby="private-hub-products-title">
      <div class="product-showcase-heading">
        <div class="private-hub-section-heading">
          <p class="private-hub-eyebrow">Prodotto reale</p>
          <h2 id="private-hub-products-title">L'ecosistema MatevIA in esecuzione.</h2>
          <p>Schermate autentiche dei moduli operativi già disponibili in ambiente locale e dimostrativo.</p>
        </div>
        <p class="product-showcase-note">AI Cognitive non espone una dashboard: opera come servizio cognitivo di backend e alimenta ORX con contesto strutturato.</p>
      </div>
      <div class="product-module-list">
        ${productCard('Decision & Governance Kernel', 'ORX Command Center', 'Trasforma un obiettivo in un piano governato e verifica rischio, autonomia, capability e decision chain prima dell’esecuzione.', '/images/product/orx-command-center.webp', 'ORX Command Center con piano ERP-agnostic, rischio e event stream', ['Goal-driven orchestration', 'Dry-run', 'Approval', 'Audit stream'])}
        ${productCard('AI Control Plane', 'AI Layer · ECO', 'Controlla modelli, runtime, routing delle capability, audit e confini operativi delle AI locali.', '/images/product/ai-layer-eco.webp', 'AI Layer ECO con ecosystem health, boundary e capability routing', ['Capability routing', 'Runtime', 'Boundary', 'Audit'])}
        ${productCard('Enterprise Orchestration', 'MatevIA Core', 'Workspace gestionale e AI con funzioni ERP native, tenant e attività operative governate.', '/images/product/matevia-core-dashboard.webp', 'MatevIA Core con dashboard gestionale e moduli ERP', ['ERP nativo', 'AI Workspace', 'Multi-tenant', 'Approvals'])}
        ${productCard('Industrial Execution Layer', 'DEX', 'Porta le attività autorizzate nei processi industriali, controllando macchine, eventi, comandi e allarmi.', '/images/product/dex-production.webp', 'DEX con stato produzione, macchine, eventi e allarmi', ['Machine state', 'Command validation', 'Events', 'Alarms'])}
        ${productCard('Energy Context Layer', 'ENX', 'Normalizza il contesto energetico e rende disponibili a ORX segnali, raccomandazioni e vincoli.', '/images/product/enx-energy-context.webp', 'ENX con consumo, segnali e vincoli energetici per ORX', ['Energy context', 'Signals', 'Constraints', 'ORX context'])}
      </div>

      <article class="cognitive-module" data-cognitive-visual>
        <div class="cognitive-layout">
          <div class="product-module-copy cognitive-copy">
            <span class="product-module-label">Backend cognitive service</span>
            <h3>AI Cognitive</h3>
            <p>Osserva le sorgenti, correla i segnali, costruisce memoria contestuale e consegna interpretazioni strutturate a ORX. In Shadow Mode non prende decisioni operative e non invia comandi diretti.</p>
            <div class="product-module-tags"><span>Shadow Mode</span><span>Context building</span><span>Memory</span><span>No direct execution</span></div>
            <div class="cognitive-status" aria-live="polite">
              <span data-cognitive-status-label>Osserva</span>
              <p data-cognitive-status-copy>Acquisisce informazioni da ERP, MES, documenti, IoT ed ENX.</p>
            </div>
          </div>

          <div class="cognitive-visual" aria-label="Visualizzazione animata del funzionamento di AI Cognitive">
            <div class="cognitive-sources" aria-label="Sorgenti informative">
              <span>ERP</span><span>MES</span><span>IoT</span><span>Documenti</span><span>ENX</span>
            </div>
            <div class="cognitive-source-line" aria-hidden="true"><i></i><i></i><i></i></div>
            <div class="cognitive-stage" data-cognitive-stage="0"><small>01</small><strong>Osserva</strong><span>Acquisisce segnali e stato operativo.</span></div>
            <div class="cognitive-connector" aria-hidden="true"><i></i></div>
            <div class="cognitive-stage" data-cognitive-stage="1"><small>02</small><strong>Correla</strong><span>Collega eventi, dati e relazioni.</span></div>
            <div class="cognitive-connector" aria-hidden="true"><i></i></div>
            <div class="cognitive-stage" data-cognitive-stage="2"><small>03</small><strong>Memoria contestuale</strong><span>Conserva una rappresentazione aggiornata.</span></div>
            <div class="cognitive-connector" aria-hidden="true"><i></i></div>
            <div class="cognitive-stage" data-cognitive-stage="3"><small>04</small><strong>Interpreta</strong><span>Genera comprensione strutturata.</span></div>
            <div class="cognitive-connector" aria-hidden="true"><i></i></div>
            <div class="cognitive-stage" data-cognitive-stage="4"><small>05</small><strong>Contesto verso ORX</strong><span>Consegna evidenze e interpretazioni.</span></div>
            <div class="cognitive-orx-link" aria-hidden="true"><i></i></div>
            <div class="cognitive-orx" data-cognitive-orx><small>Decision authority</small><strong>ORX</strong><span>Valuta policy, approvazioni e responsabilità.</span></div>
          </div>
        </div>
      </article>
    </section>

    <section class="private-hub-workflow" aria-labelledby="workflow-title">
      <div class="workflow-heading">
        <div class="private-hub-section-heading">
          <p class="private-hub-eyebrow">Workflow governato</p>
          <h2 id="workflow-title">Dalla richiesta all'esecuzione, senza perdere controllo.</h2>
          <p>Ogni passaggio sensibile viene contestualizzato, verificato e reso ricostruibile prima di produrre un effetto operativo.</p>
        </div>
        <p class="workflow-note">L'AI può proporre e preparare. ORX applica regole e responsabilità. L'esecuzione avviene soltanto quando le condizioni di governance sono soddisfatte.</p>
      </div>
      <div class="workflow-track" aria-label="Sequenza del workflow governato MatevIA">
        <article class="workflow-step"><span class="workflow-index">01</span><h3>Richiesta</h3><p>Un utente, un sistema o una capability propone un'attività.</p><strong>Origine identificata</strong></article>
        <article class="workflow-step"><span class="workflow-index">02</span><h3>Contesto</h3><p>ORX acquisisce dati, stato, vincoli, ruoli e informazioni utili.</p><strong>Contesto versionato</strong></article>
        <article class="workflow-step"><span class="workflow-index">03</span><h3>Dry-run</h3><p>L'azione viene simulata per stimare impatti, dipendenze ed eccezioni.</p><strong>Nessun effetto reale</strong></article>
        <article class="workflow-step is-gate"><span class="workflow-index">04</span><h3>Policy e approvazione</h3><p>Regole, soglie e responsabilità determinano il gate autorizzativo.</p><strong>Governance gate</strong></article>
        <article class="workflow-step"><span class="workflow-index">05</span><h3>Dispatch</h3><p>ORX invia l'attività soltanto al layer autorizzato all'esecuzione.</p><strong>Comando controllato</strong></article>
        <article class="workflow-step"><span class="workflow-index">06</span><h3>Evidence</h3><p>Contesto, policy, approvazioni, esito ed esecuzione restano collegati.</p><strong>Decisione ricostruibile</strong></article>
      </div>
      <div class="workflow-evidence">
        <article class="workflow-evidence-card"><h3>Governance evidence</h3><p>Non viene registrato soltanto ciò che è successo, ma anche perché è stato consentito, chi ne aveva la responsabilità e quale contesto era disponibile.</p><div class="workflow-tags"><span>Richiedente</span><span>Contesto</span><span>Policy</span><span>Approvatore</span><span>Esito</span><span>Timestamp</span></div></article>
        <article class="workflow-evidence-card"><h3>Human-in-the-loop reale</h3><p>L'approvazione è una condizione nativa del workflow, governata da ruoli, soglie e policy aziendali.</p></article>
      </div>
    </section>`;

  const cognitive = root.querySelector('[data-cognitive-visual]');
  if (cognitive) {
    const stages = Array.from(cognitive.querySelectorAll('[data-cognitive-stage]'));
    const connectors = Array.from(cognitive.querySelectorAll('.cognitive-connector'));
    const sourceLine = cognitive.querySelector('.cognitive-source-line');
    const orxLink = cognitive.querySelector('.cognitive-orx-link');
    const orx = cognitive.querySelector('[data-cognitive-orx]');
    const statusLabel = cognitive.querySelector('[data-cognitive-status-label]');
    const statusCopy = cognitive.querySelector('[data-cognitive-status-copy]');
    const messages = [
      ['Osserva', 'Acquisisce informazioni da ERP, MES, documenti, IoT ed ENX.'],
      ['Correla', 'Collega eventi, dati e relazioni provenienti da domini differenti.'],
      ['Memoria contestuale', 'Costruisce una memoria contestuale persistente e aggiornata.'],
      ['Interpreta', 'Genera una comprensione strutturata della situazione operativa.'],
      ['Contesto verso ORX', 'Consegna a ORX evidenze e interpretazioni per decisioni governate.'],
      ['ORX', 'ORX valuta policy, approvazioni e responsabilità prima di qualsiasi azione.']
    ];
    let step = 0;
    let timer;

    const clearState = () => {
      stages.forEach((node) => node.classList.remove('is-active', 'is-complete'));
      connectors.forEach((node) => node.classList.remove('is-active'));
      sourceLine?.classList.remove('is-active');
      orxLink?.classList.remove('is-active');
      orx?.classList.remove('is-active');
    };

    const renderStep = () => {
      clearState();
      stages.forEach((node, index) => {
        if (index < Math.min(step, 5)) node.classList.add('is-complete');
      });

      if (step < 5) {
        stages[step]?.classList.add('is-active');
        if (step === 0) sourceLine?.classList.add('is-active');
        if (step > 0) connectors[step - 1]?.classList.add('is-active');
      } else if (step === 5) {
        stages.forEach((node) => node.classList.add('is-complete'));
        orxLink?.classList.add('is-active');
        orx?.classList.add('is-active');
      }

      const message = messages[Math.min(step, messages.length - 1)];
      if (statusLabel) statusLabel.textContent = message[0];
      if (statusCopy) statusCopy.textContent = message[1];

      const delay = step < 5 ? 2000 : step === 5 ? 1000 : 1000;
      step = step >= 6 ? 0 : step + 1;
      timer = window.setTimeout(renderStep, delay);
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
      stages.forEach((node) => node.classList.add('is-complete'));
      orx?.classList.add('is-active');
    } else {
      renderStep();
    }

    document.addEventListener('visibilitychange', () => {
      window.clearTimeout(timer);
      if (!document.hidden && !reduceMotion.matches) renderStep();
    });
  }

  const lightbox = document.createElement('div');
  lightbox.className = 'product-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Anteprima schermata prodotto');
  lightbox.innerHTML = '<button type="button" aria-label="Chiudi">×</button><img alt="Schermata prodotto ingrandita">';
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('img');
  const close = () => lightbox.classList.remove('is-open');
  root.querySelectorAll('.product-screen').forEach((button) => {
    const image = button.querySelector('img');
    image.addEventListener('error', () => button.classList.add('is-missing'));
    button.addEventListener('click', () => {
      if (button.classList.contains('is-missing')) return;
      lightboxImage.src = button.dataset.productImage;
      lightboxImage.alt = image.alt;
      lightbox.classList.add('is-open');
    });
  });
  lightbox.querySelector('button').addEventListener('click', close);
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
})();
