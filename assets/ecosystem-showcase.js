(() => {
  const ensureArchitectureStyles = () => {
    if (document.querySelector('link[href="/assets/ecosystem-v5.css"]')) return;
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '/assets/ecosystem-v5.css';
    document.head.appendChild(stylesheet);
  };

  const renderArchitectureSections = () => {
    const placeholder = document.querySelector('[data-ecosystem-content]');
    if (!placeholder || document.querySelector('.private-hub-architecture')) return;

    placeholder.insertAdjacentHTML('beforebegin', `
      <section class="private-hub-architecture" aria-labelledby="architecture-title">
        <div class="architecture-heading">
          <div class="private-hub-section-heading">
            <p class="private-hub-eyebrow">Architettura completa</p>
            <h2 id="architecture-title">Un kernel di governance. Layer specializzati. Un solo contesto operativo.</h2>
            <p>ORX mantiene l'autorità decisionale e coordina AI, interfacce e moduli operativi senza confondere responsabilità e controllo.</p>
          </div>
          <p class="architecture-note">L'installazione minima comprende ORX, AI Layer, AI Cognitive e MatevIA Console. Core, DEX ed ENX vengono attivati in base al perimetro e ai sistemi già presenti presso il cliente.</p>
        </div>

        <div class="architecture-stage" aria-label="Architettura completa dell'ecosistema MatevIA">
          <span class="architecture-link link-ai" aria-hidden="true"></span>
          <span class="architecture-link link-cognitive" aria-hidden="true"></span>
          <span class="architecture-link link-console" aria-hidden="true"></span>
          <span class="architecture-link link-core" aria-hidden="true"></span>
          <span class="architecture-link link-dex" aria-hidden="true"></span>
          <span class="architecture-link link-enx" aria-hidden="true"></span>

          <div class="architecture-core"><div><strong>ORX</strong><span>Decision & governance kernel</span></div></div>

          <article class="architecture-node architecture-ai-layer is-minimum"><small>Nucleo minimo</small><h3>AI Layer</h3><p>Controlla modelli, capability, routing, autorizzazioni e ciclo di vita delle AI locali.</p></article>
          <article class="architecture-node architecture-cognitive is-minimum"><small>Nucleo minimo</small><h3>AI Cognitive</h3><p>Osserva il contesto industriale, costruisce conoscenza e opera inizialmente in Shadow Mode.</p></article>
          <article class="architecture-node architecture-console is-minimum"><small>Nucleo minimo</small><h3>MatevIA Console</h3><p>Visualizza stato, decisioni, richieste, approvazioni ed evidence esposte da ORX.</p></article>
          <article class="architecture-node architecture-core-erp is-optional"><small>Layer attivabile</small><h3>MatevIA Core</h3><p>Orchestrazione aziendale, workspace AI e funzioni ERP native quando richieste.</p></article>
          <article class="architecture-node architecture-dex is-optional"><small>Layer attivabile</small><h3>DEX</h3><p>Riceve solo attività autorizzate e ne governa l'esecuzione nei processi industriali.</p></article>
          <article class="architecture-node architecture-enx is-optional"><small>Layer attivabile</small><h3>ENX</h3><p>Normalizza il contesto energetico e porta vincoli e indicatori nelle decisioni governate.</p></article>

          <div class="architecture-foundation" aria-label="Fondamenta tecnologiche">
            <span>On-premise</span><span>Tenant isolati</span><span>Policy versionate</span><span>Human approval</span><span>Audit trail</span>
          </div>
        </div>
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
          <article class="workflow-step"><span class="workflow-index">01</span><h3>Richiesta</h3><p>Un utente, un sistema o una capability propone un'attività nel linguaggio e nel contesto aziendale.</p><strong>Origine identificata</strong></article>
          <article class="workflow-step"><span class="workflow-index">02</span><h3>Contesto</h3><p>ORX acquisisce dati, stato dei processi, vincoli, ruoli e informazioni utili alla valutazione.</p><strong>Contesto versionato</strong></article>
          <article class="workflow-step"><span class="workflow-index">03</span><h3>Dry-run</h3><p>L'azione viene simulata per stimare impatti, dipendenze, eccezioni e possibili conseguenze.</p><strong>Nessun effetto reale</strong></article>
          <article class="workflow-step is-gate"><span class="workflow-index">04</span><h3>Policy e approvazione</h3><p>Regole, soglie e responsabilità determinano se serva un'autorizzazione umana e da quale ruolo.</p><strong>Gate di governance</strong></article>
          <article class="workflow-step"><span class="workflow-index">05</span><h3>Dispatch</h3><p>Solo dopo l'esito positivo ORX invia l'attività al layer o al sistema autorizzato all'esecuzione.</p><strong>Comando controllato</strong></article>
          <article class="workflow-step"><span class="workflow-index">06</span><h3>Evidence</h3><p>Richiesta, contesto, policy, approvazioni, esito ed esecuzione restano collegati nell'audit trail.</p><strong>Decisione ricostruibile</strong></article>
        </div>

        <div class="workflow-evidence">
          <article class="workflow-evidence-card"><h3>Governance evidence</h3><p>Non viene registrato soltanto ciò che è successo, ma anche perché è stato consentito, chi ne aveva la responsabilità e quale contesto era disponibile in quel momento.</p><div class="workflow-tags"><span>Richiedente</span><span>Contesto</span><span>Policy applicate</span><span>Approvatore</span><span>Esito</span><span>Timestamp</span></div></article>
          <article class="workflow-evidence-card"><h3>Human-in-the-loop reale</h3><p>L'approvazione non è una schermata aggiunta all'ultimo momento: è una condizione nativa del workflow, governata da ruoli, soglie e policy aziendali.</p></article>
        </div>
      </section>
    `);
  };

  ensureArchitectureStyles();
  renderArchitectureSections();

  const showcase = document.querySelector('[data-console-showcase]');
  if (!showcase) return;

  const slides = Array.from(showcase.querySelectorAll('[data-console-slide]'));
  const dots = Array.from(showcase.querySelectorAll('[data-console-dot]'));
  const previous = showcase.querySelector('[data-console-prev]');
  const next = showcase.querySelector('[data-console-next]');
  let activeIndex = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeIndex;
      slide.classList.toggle('is-active', active);
      slide.hidden = !active;
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === activeIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
    });
  };

  previous?.addEventListener('click', () => showSlide(activeIndex - 1));
  next?.addEventListener('click', () => showSlide(activeIndex + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));

  showcase.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showSlide(activeIndex - 1);
    if (event.key === 'ArrowRight') showSlide(activeIndex + 1);
  });

  showSlide(0);
})();