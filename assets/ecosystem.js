(function () {
  const SESSION_KEY = "matevia-ecosystem-session-v1";
  const COOKIE_NAME = "matevia_ecosystem_session";
  const SESSION_TTL_MS = 60 * 60 * 1000;
  const MEDIA = {
    image: [
      "/images/immagine interna.png",
      "/images/immagine interna.jpg",
      "/images/immagine interna.jpeg",
      "/images/immagine interna.webp",
      "/images/Immagine Interna.png",
      "/images/Immagine Interna.jpg",
      "/images/Immagine Interna.jpeg",
      "/images/Immagine Interna.webp"
    ],
    video: [
      "/images/MatevIA_Ecosistem.mp4",
      "/images/MatevIA_Ecosistem.webm",
      "/images/MatevIA_Ecosistem.mov"
    ]
  };

  function getPayloadConfig() {
    return window.MateviaEcosystemPayload || null;
  }

  function toBytes(base64) {
    const raw = atob(base64);
    const bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i += 1) {
      bytes[i] = raw.charCodeAt(i);
    }
    return bytes;
  }

  function fromBytes(bytes) {
    return new TextDecoder().decode(bytes);
  }

  async function deriveKey(password, config) {
    const baseKey = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );

    return crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: toBytes(config.salt),
        iterations: config.iterations,
        hash: "SHA-256"
      },
      baseKey,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
  }

  async function decryptContent(password) {
    const config = getPayloadConfig();
    if (!config || !config.salt || !config.iv || !config.ciphertext) {
      throw new Error("CONFIG_MISSING");
    }

    const key = await deriveKey(password, config);
    const clearBytes = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: toBytes(config.iv) },
      key,
      toBytes(config.ciphertext)
    );

    return JSON.parse(fromBytes(clearBytes));
  }

  function setCookie() {
    document.cookie = `${COOKIE_NAME}=1; path=/ecosystem; max-age=${SESSION_TTL_MS / 1000}; SameSite=Strict`;
  }

  function clearCookie() {
    document.cookie = `${COOKIE_NAME}=; path=/ecosystem; max-age=0; SameSite=Strict`;
  }

  function hasCookie() {
    return document.cookie.split(";").some((item) => item.trim() === `${COOKIE_NAME}=1`);
  }

  function writeSession(password) {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({
        password,
        expiresAt: Date.now() + SESSION_TTL_MS
      }));
    } catch (_) {
      // La sessione resta valida solo finche' la pagina e' aperta se sessionStorage e' bloccato.
    }
    setCookie();
  }

  function readSession() {
    if (!hasCookie()) {
      return null;
    }

    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      if (!parsed || !parsed.password || !parsed.expiresAt || parsed.expiresAt <= Date.now()) {
        return null;
      }
      return parsed;
    } catch (_) {
      return null;
    }
  }

  function clearSession() {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch (_) {
      // Ignore storage-blocked environments.
    }
    clearCookie();
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([key, value]) => {
      if (key === "className") {
        node.className = value;
        return;
      }
      if (key === "text") {
        node.textContent = value;
        return;
      }
      node.setAttribute(key, value);
    });
    (children || []).forEach((child) => {
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function renderList(items, className) {
    return el("ul", { className: className || "list" }, items.map((item) => el("li", { text: item })));
  }

  function renderMediaImage(fallbackText) {
    const figure = el("figure", { className: "ecosystem-media-frame ecosystem-image-frame" });
    const img = el("img", { alt: "Architettura interna dell'ecosistema MatevIA" });
    let index = 0;

    const fallback = function () {
      figure.replaceChildren(el("div", { className: "ecosystem-media-fallback", text: fallbackText }));
    };

    img.addEventListener("error", function tryNext() {
      index += 1;
      if (index >= MEDIA.image.length) {
        img.removeEventListener("error", tryNext);
        fallback();
        return;
      }
      img.src = encodeURI(MEDIA.image[index]);
    });

    img.src = encodeURI(MEDIA.image[index]);
    figure.appendChild(img);
    return figure;
  }

  function renderMediaVideo(fallbackText) {
    const video = el("video", {
      className: "ecosystem-video",
      controls: "",
      preload: "metadata"
    });
    MEDIA.video.forEach((src) => {
      const type = src.endsWith(".webm") ? "video/webm" : src.endsWith(".mov") ? "video/quicktime" : "video/mp4";
      video.appendChild(el("source", { src: encodeURI(src), type }));
    });
    video.appendChild(document.createTextNode(fallbackText));

    const frame = el("div", { className: "ecosystem-media-frame" }, [video]);
    video.addEventListener("error", function () {
      frame.replaceChildren(el("div", { className: "ecosystem-media-fallback", text: fallbackText }));
    });
    return frame;
  }

  function renderMetricGrid(items) {
    return el("dl", { className: "ecosystem-metrics" }, items.flatMap((item) => [
      el("div", { className: "ecosystem-metric" }, [
        el("dt", { text: item.label }),
        el("dd", { text: item.value })
      ])
    ]));
  }

  function renderTimeline(items, numeric) {
    return el("ol", { className: numeric ? "ecosystem-timeline numeric" : "ecosystem-timeline" },
      items.map((item) => el("li", { text: item }))
    );
  }

  function renderEvidence(block) {
    return el("article", { className: "ecosystem-evidence-card" }, [
      el("div", { className: "ecosystem-evidence-head" }, [
        el("p", { className: "ecosystem-kicker", text: block.kicker }),
        el("h3", { text: block.title }),
        el("p", { className: "muted", text: block.scenarioLabel + ": " + block.scenario })
      ]),
      renderMetricGrid(block.facts),
      block.metrics && block.metrics.length ? el("h4", { text: block.metricsTitle || "Metriche" }) : document.createDocumentFragment(),
      block.metrics && block.metrics.length ? renderMetricGrid(block.metrics) : document.createDocumentFragment(),
      el("h4", { text: "Timeline visuale" }),
      renderTimeline(block.timeline, block.numericTimeline),
      el("p", { className: "ecosystem-evidence-text", text: block.description }),
      el("h4", { text: "Principi validati" }),
      renderList(block.principles)
    ]);
  }

  function renderArchitectureCard(layer) {
    return el("article", { className: "ecosystem-layer-card " + layer.className }, [
      el("h3", { text: layer.name }),
      el("p", { className: "ecosystem-layer-subtitle", text: layer.subtitle }),
      renderList(layer.points, "ecosystem-layer-list")
    ]);
  }

  function renderContent(content) {
    const root = document.querySelector("[data-ecosystem-content]");
    if (!root) {
      return;
    }

    root.replaceChildren(
      el("section", { className: "ecosystem-hero reveal" }, [
        el("p", { className: "ecosystem-kicker", text: content.hero.kicker }),
        el("h1", { text: content.hero.title }),
        el("p", { className: "lead", text: content.hero.description })
      ]),
      el("section", { className: "ecosystem-section reveal" }, [
        el("h2", { className: "section-title", text: content.overview.title }),
        el("div", { className: "ecosystem-overview-grid" }, [
          renderMediaImage(content.overview.imageFallback),
          el("p", { className: "lead", text: content.overview.description })
        ])
      ]),
      el("section", { className: "ecosystem-section reveal" }, [
        el("h2", { className: "section-title", text: "Layer Architetturali" }),
        el("div", { className: "ecosystem-layers" }, content.layers.map(renderArchitectureCard))
      ]),
      el("section", { className: "ecosystem-section reveal" }, [
        el("h2", { className: "section-title", text: "Flusso di Orchestrazione Completo" }),
        el("div", { className: "ecosystem-flow" }, content.flow.steps.map((step) => el("span", { text: step }))),
        el("p", { className: "muted ecosystem-flow-copy", text: content.flow.description })
      ]),
      el("section", { className: "ecosystem-section reveal" }, [
        el("h2", { className: "section-title", text: content.demo.title }),
        renderMediaVideo(content.demo.videoFallback),
        el("p", { className: "muted ecosystem-demo-copy", text: content.demo.description })
      ]),
      el("section", { className: "ecosystem-section reveal" }, [
        el("h2", { className: "section-title", text: content.evidence.title }),
        el("div", { className: "ecosystem-evidence-grid" }, content.evidence.blocks.map(renderEvidence))
      ]),
      el("section", { className: "ecosystem-section ecosystem-strategic reveal" }, [
        el("h2", { className: "section-title", text: content.validation.title }),
        renderList(content.validation.points, "ecosystem-validation-list"),
        el("div", { className: "ecosystem-decision-callout" }, [
          el("strong", { text: content.validation.callout }),
          el("span", { text: content.validation.orx }),
          el("span", { text: content.validation.dex }),
          el("span", { text: content.validation.matevia })
        ])
      ]),
      el("section", { className: "ecosystem-section reveal" }, [
        el("h2", { className: "section-title", text: content.foundation.title }),
        el("div", { className: "ecosystem-foundation" }, content.foundation.items.map((item) => el("span", { text: item })))
      ]),
      el("section", { className: "ecosystem-private-notice reveal" }, [
        el("p", { text: content.notice })
      ])
    );
  }

  async function unlock(password) {
    const content = await decryptContent(password);
    writeSession(password);
    document.querySelector("[data-ecosystem-login]").hidden = true;
    document.querySelector("[data-ecosystem-private]").hidden = false;
    renderContent(content);
  }

  function showLogin(message) {
    document.querySelector("[data-ecosystem-private]").hidden = true;
    document.querySelector("[data-ecosystem-login]").hidden = false;
    if (message) {
      document.querySelector("[data-ecosystem-error]").textContent = message;
    }
  }

  function init() {
    const form = document.querySelector("[data-ecosystem-login-form]");
    const error = document.querySelector("[data-ecosystem-error]");
    const logout = document.querySelector("[data-ecosystem-logout]");

    if (!form || !error || !logout) {
      return;
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      error.textContent = "";
      const password = new FormData(form).get("password");
      try {
        await unlock(String(password || ""));
        form.reset();
      } catch (err) {
        const missingConfig = err && err.message === "CONFIG_MISSING";
        error.textContent = missingConfig
          ? "Configurazione area riservata non disponibile. Genera il payload con MATEVIA_ECOSYSTEM_PASSWORD."
          : "Password non valida. Verifica le credenziali e riprova.";
      }
    });

    logout.addEventListener("click", function () {
      clearSession();
      showLogin("Sessione chiusa. Inserisci la password per accedere di nuovo.");
    });

    const session = readSession();
    if (session) {
      unlock(session.password).catch(function () {
        clearSession();
        showLogin("");
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
