(() => {
  const ensureStylesheet = (href) => {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = href;
    document.head.appendChild(stylesheet);
  };

  const renderArchitectureSections = () => {
    const placeholder = document.querySelector('[data-ecosystem-content]');
    if (!placeholder || document.querySelector('.private-hub-architecture')) return;
    placeholder.insertAdjacentHTML('beforebegin', `
      <section class="private-hub-architecture" aria-labelledby="architecture-title">
        <div class="architecture-heading"><div class="private-hub-section-heading"><p class="private-hub-eyebrow">Architettura completa</p><h2 id="architecture-title">Un kernel di governance. Layer specializzati. Un solo contesto operativo.</h2><p>ORX mantiene l'autorità decisionale e coordina AI, interfacce e moduli operativi senza confondere responsabilità e controllo.</p></div><p class="architecture-note">L'installazione minima comprende ORX, AI Layer, AI Cognitive e MatevIA Console. Core, DEX ed ENX vengono attivati in base al perimetro e ai sistemi già presenti presso il cliente.</p></div>
        <div class="architecture-stage" aria-label="Architettura completa dell'ecosistema MatevIA">
          <span class="architecture-link link-ai" aria-hidden="true"></span><span class="architecture-link link-cognitive" aria-hidden="true"></span><span class="architecture-link link-console" aria-hidden="true"></span><span class="architecture-link link-core" aria-hidden="true"></span><span class="architecture-link link-dex" aria-hidden="true"></span><span class="architecture-link link-enx" aria-hidden="true"></span>
          <div class="architecture-core"><div><strong>ORX</strong><span>Decision & governance kernel</span></div></div>
          <article class="architecture-node architecture-ai-layer is-minimum"><small>Nucleo minimo</small><h3>AI Layer</h3><p>Controlla modelli, capability, routing, autorizzazioni e ciclo di vita delle AI locali.</p></article>
          <article class="architecture-node architecture-cognitive is-minimum"><small>Nucleo minimo</small><h3>AI Cognitive</h3><p>Osserva il contesto industriale, costruisce conoscenza e opera inizialmente in Shadow Mode.</p></article>
          <article class="architecture-node architecture-console is-minimum"><small>Nucleo minimo</small><h3>MatevIA Console</h3><p>Visualizza stato, decisioni, richieste, approvazioni ed evidence esposte da ORX.</p></article>
          <article class="architecture-node architecture-core-erp is-optional"><small>Layer attivabile</small><h3>MatevIA Core</h3><p>Orchestrazione aziendale, workspace AI e funzioni ERP native quando richieste.</p></article>
          <article class="architecture-node architecture-dex is-optional"><small>Layer attivabile</small><h3>DEX</h3><p>Riceve solo attività autorizzate e ne governa l'esecuzione nei processi industriali.</p></article>
          <article class="architecture-node architecture-enx is-optional"><small>Layer attivabile</small><h3>ENX</h3><p>Normalizza il contesto energetico e porta vincoli e indicatori nelle decisioni governate.</p></article>
          <div class="architecture-foundation" aria-label="Fondamenta tecnologiche"><span>On-premise</span><span>Tenant isolati</span><span>Policy versionate</span><span>Human approval</span><span>Audit trail</span></div>
        </div>
      </section>
      <section class="private-hub-workflow" aria-labelledby="workflow-title">
        <div class="workflow-heading"><div class="private-hub-section-heading"><p class="private-hub-eyebrow">Workflow governato</p><h2 id="workflow-title">Dalla richiesta all'esecuzione, senza perdere controllo.</h2><p>Ogni passaggio sensibile viene contestualizzato, verificato e reso ricostruibile prima di produrre un effetto operativo.</p></div><p class="workflow-note">L'AI può proporre e preparare. ORX applica regole e responsabilità. L'esecuzione avviene soltanto quando le condizioni di governance sono soddisfatte.</p></div>
        <div class="workflow-track" aria-label="Sequenza del workflow governato MatevIA"><article class="workflow-step"><span class="workflow-index">01</span><h3>Richiesta</h3><p>Un utente, un sistema o una capability propone un'attività nel linguaggio e nel contesto aziendale.</p><strong>Origine identificata</strong></article><article class="workflow-step"><span class="workflow-index">02</span><h3>Contesto</h3><p>ORX acquisisce dati, stato dei processi, vincoli, ruoli e informazioni utili alla valutazione.</p><strong>Contesto versionato</strong></article><article class="workflow-step"><span class="workflow-index">03</span><h3>Dry-run</h3><p>L'azione viene simulata per stimare impatti, dipendenze, eccezioni e possibili conseguenze.</p><strong>Nessun effetto reale</strong></article><article class="workflow-step is-gate"><span class="workflow-index">04</span><h3>Policy e approvazione</h3><p>Regole, soglie e responsabilità determinano se serva un'autorizzazione umana e da quale ruolo.</p><strong>Gate di governance</strong></article><article class="workflow-step"><span class="workflow-index">05</span><h3>Dispatch</h3><p>Solo dopo l'esito positivo ORX invia l'attività al layer o al sistema autorizzato all'esecuzione.</p><strong>Comando controllato</strong></article><article class="workflow-step"><span class="workflow-index">06</span><h3>Evidence</h3><p>Richiesta, contesto, policy, approvazioni, esito ed esecuzione restano collegati nell'audit trail.</p><strong>Decisione ricostruibile</strong></article></div>
        <div class="workflow-evidence"><article class="workflow-evidence-card"><h3>Governance evidence</h3><p>Non viene registrato soltanto ciò che è successo, ma anche perché è stato consentito, chi ne aveva la responsabilità e quale contesto era disponibile in quel momento.</p><div class="workflow-tags"><span>Richiedente</span><span>Contesto</span><span>Policy applicate</span><span>Approvatore</span><span>Esito</span><span>Timestamp</span></div></article><article class="workflow-evidence-card"><h3>Human-in-the-loop reale</h3><p>L'approvazione non è una schermata aggiunta all'ultimo momento: è una condizione nativa del workflow, governata da ruoli, soglie e policy aziendali.</p></article></div>
      </section>`);
  };

  const renderProductShowcase = () => {
    const consoleSection = document.querySelector('.private-hub-console');
    if (!consoleSection || document.querySelector('.private-hub-products')) return;
    const products = document.createElement('section');
    products.className = 'private-hub-products';
    products.setAttribute('aria-labelledby', 'private-hub-products-title');
    products.innerHTML = `
      <div class="product-showcase-heading"><div class="private-hub-section-heading"><p class="private-hub-eyebrow">Prodotto reale</p><h2 id="private-hub-products-title">L'ecosistema MatevIA in esecuzione.</h2><p>Interfacce autentiche dei moduli già operativi in ambiente locale e dimostrativo.</p></div><p class="product-showcase-note">Ogni schermata rappresenta un componente reale. AI Cognitive non espone una dashboard: opera come servizio cognitivo di backend e alimenta ORX con contesto strutturato.</p></div>
      <div class="product-module-list">
        ${productCard('Decision & Governance Kernel','ORX Command Center','Trasforma un obiettivo in un piano governato, verifica rischio, autonomia, capability e decision chain prima dell’esecuzione.','/images/product/orx-command-center.webp','ORX Command Center con piani ERP-agnostic, task, rischio e event stream',['Goal-driven orchestration','Dry-run','Approval','Audit stream'])}
        ${productCard('AI Control Plane','AI Layer · ECO','Controlla modelli, runtime, routing delle capability, audit e confini operativi delle AI locali.','/images/product/ai-layer-eco.webp','AI Layer ECO Admin con ecosystem health, boundary e capability routing',['Capability routing','Runtime','Boundary','Audit'])}
        ${productCard('Enterprise Orchestration','MatevIA Core','Workspace gestionale e AI con funzioni ERP native, moduli aziendali, tenant e attività operative governate.','/images/product/matevia-core-dashboard.webp','MatevIA Core con dashboard gestionale, moduli ERP e agenda AI',['ERP nativo','AI Workspace','Multi-tenant','Approvals'])}
        ${productCard('Industrial Execution Layer','DEX','Porta le attività autorizzate nei processi industriali, controllando macchine, eventi, comandi, mapping e allarmi.','/images/product/dex-production.webp','DEX con stato produzione, macchine, eventi, comandi e allarmi',['Machine state','Command validation','Events','Alarms'])}
        ${productCard('Energy Context Layer','ENX','Normalizza il contesto energetico e rende disponibili a ORX segnali, raccomandazioni e vincoli applicabili alla pianificazione.','/images/product/enx-energy-context.webp','ENX Energy Context con consumo, segnali e vincoli energetici per ORX',['Energy context','Signals','Constraints','ORX context'])}
      </div>
      <article class="cognitive-module"><div class="cognitive-layout"><div class="product-module-copy"><span class="product-module-label">Backend cognitive service</span><h3>AI Cognitive</h3><p>Non possiede una dashboard. Osserva le sorgenti, correla i segnali, costruisce memoria contestuale e consegna interpretazioni strutturate a ORX. In Shadow Mode non prende decisioni operative.</p><div class="product-module-tags"><span>Shadow Mode</span><span>Context building</span><span>Memory</span><span>No direct execution</span></div></div><div class="cognitive-flow" aria-label="Flusso AI Cognitive"><div class="cognitive-step"><small>01</small><strong>Osserva</strong></div><div class="cognitive-step"><small>02</small><strong>Correla</strong></div><div class="cognitive-step"><small>03</small><strong>Costruisce memoria</strong></div><div class="cognitive-step"><small>04</small><strong>Interpreta</strong></div><div class="cognitive-step"><small>05</small><strong>Alimenta ORX</strong></div></div></div></article>`;
    consoleSection.parentNode.insertBefore(products, consoleSection);

    const lightbox = document.createElement('div');
    lightbox.className = 'product-lightbox';
    lightbox.setAttribute('role','dialog');
    lightbox.setAttribute('aria-modal','true');
    lightbox.setAttribute('aria-label','Anteprima schermata prodotto');
    lightbox.innerHTML = '<button type="button" aria-label="Chiudi">×</button><img alt="Schermata prodotto ingrandita">';
    document.body.appendChild(lightbox);
    const lightboxImage = lightbox.querySelector('img');
    const close = () => lightbox.classList.remove('is-open');
    products.querySelectorAll('.product-screen').forEach((button) => {
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
  };

  const productCard = (label,title,description,image,alt,tags) => `<article class="product-module"><button class="product-screen" type="button" data-product-image="${image}" aria-label="Apri ${title}"><img src="${image}" alt="${alt}"></button><div class="product-module-copy"><span class="product-module-label">${label}</span><h3>${title}</h3><p>${description}</p><div class="product-module-tags">${tags.map(tag => `<span>${tag}</span>`).join('')}</div></div></article>`;

  ensureStylesheet('/assets/ecosystem-v5.css');
  ensureStylesheet('/assets/ecosystem-products.css');
  renderArchitectureSections();
  renderProductShowcase();

  const showcase = document.querySelector('[data-console-showcase]');
  if (!showcase) return;
  const slides = Array.from(showcase.querySelectorAll('[data-console-slide]'));
  const dots = Array.from(showcase.querySelectorAll('[data-console-dot]'));
  const previous = showcase.querySelector('[data-console-prev]');
  const next = showcase.querySelector('[data-console-next]');
  let activeIndex = 0;
  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => { const active = slideIndex === activeIndex; slide.classList.toggle('is-active', active); slide.hidden = !active; });
    dots.forEach((dot, dotIndex) => { const active = dotIndex === activeIndex; dot.classList.toggle('is-active', active); dot.setAttribute('aria-current', active ? 'true' : 'false'); });
  };
  previous?.addEventListener('click', () => showSlide(activeIndex - 1));
  next?.addEventListener('click', () => showSlide(activeIndex + 1));
  dots.forEach((dot,index) => dot.addEventListener('click', () => showSlide(index)));
  showcase.addEventListener('keydown', (event) => { if (event.key === 'ArrowLeft') showSlide(activeIndex - 1); if (event.key === 'ArrowRight') showSlide(activeIndex + 1); });
  showSlide(0);
})();