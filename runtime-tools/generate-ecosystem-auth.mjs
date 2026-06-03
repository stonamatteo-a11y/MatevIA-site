import { webcrypto } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const subtle = webcrypto.subtle;
const password = process.env.MATEVIA_ECOSYSTEM_PASSWORD;
const iterations = Number(process.env.MATEVIA_ECOSYSTEM_PBKDF2_ITERATIONS || 250000);
const outputPath = resolve(dirname(fileURLToPath(import.meta.url)), "..", "private-content", "ecosystem-auth.generated.js");

if (!password) {
  console.error("MATEVIA_ECOSYSTEM_PASSWORD non impostata.");
  process.exit(1);
}

const content = {
  hero: {
    kicker: "Riservato / Accesso riservato a partner e investitori",
    title: "MatevIA Ecosystem - Area Riservata",
    description: "Questa area riservata contiene architettura interna dell'ecosistema, evidenze di governance, flussi di validazione e materiale dimostrativo per partner e investitori selezionati."
  },
  origins: {
    title: "Le Origini di MatevIA",
    intro: "MatevIA nasce da un'esperienza reale.",
    sections: [
      {
        title: "",
        paragraphs: [
          "Per anni abbiamo vissuto direttamente le complessita operative delle aziende e dei sistemi industriali, osservando come persone, processi e tecnologie fossero spesso gestiti da strumenti separati, incapaci di collaborare in modo intelligente e governato.",
          "Ogni decisione richiedeva coordinamento manuale. Ogni informazione era distribuita tra sistemi diversi. Ogni processo dipendeva da continui interventi umani per collegare strategia, operativita ed esecuzione.",
          "Da questa esperienza e nata una domanda:",
          "E possibile costruire un sistema che non si limiti a registrare dati o automatizzare attivita, ma che sia in grado di comprendere obiettivi, applicare governance, orchestrare processi e coordinare l'esecuzione in modo controllato?",
          "MatevIA nasce per rispondere a questa domanda."
        ]
      },
      {
        title: "La Nostra Visione",
        paragraphs: [
          "Crediamo che il futuro delle imprese non sia fatto da software isolati, ma da ecosistemi intelligenti capaci di collaborare.",
          "ERP, MES, sistemi OT, IoT, piattaforme energetiche e Intelligenza Artificiale non devono essere strumenti separati, ma componenti di un unico sistema governabile.",
          "La nostra visione e costruire l'infrastruttura di orchestrazione che unisce intelligence, governance ed esecuzione.",
          "Un ecosistema in cui gli obiettivi si trasformano in decisioni, le decisioni in piani operativi, i piani in azioni controllate e ogni risultato diventa conoscenza utile per migliorare continuamente.",
          "Non sostituire le persone, ma amplificarne le capacita. Non eliminare il controllo, ma renderlo scalabile. Non aumentare la complessita, ma coordinarla."
        ]
      },
      {
        title: "Lo Sguardo al Futuro",
        paragraphs: [
          "Immaginiamo un futuro in cui le organizzazioni possano operare con livelli crescenti di autonomia senza rinunciare a governance, sicurezza e responsabilita.",
          "Un futuro in cui ogni sistema aziendale e industriale possa collaborare all'interno di un ecosistema comune.",
          "MatevIA, ORX, DEX ed ENX rappresentano i primi passi di questa visione.",
          "Il nostro obiettivo e costruire una nuova generazione di infrastrutture enterprise: sistemi capaci di comprendere il contesto, supportare le decisioni, orchestrare l'operativita e generare valore misurabile nel tempo."
        ],
        closing: ["Non un semplice software.", "Un ecosistema di orchestrazione per l'impresa del futuro."]
      }
    ]
  },
  overview: {
    title: "Architettura Completa dell'Ecosistema MatevIA",
    description: "MatevIA unifica intelligenza, governance, execution, contesto energetico e supervisione AI in un unico ecosistema di orchestrazione enterprise governance-first.",
    imageFallback: "Immagine dell'ecosistema non ancora disponibile. Inserire il file in /images/ con nome base 'immagine interna'."
  },
  layers: [
    {
      name: "ORX",
      className: "layer-orx",
      subtitle: "Layer di Governance & Decision Intelligence",
      points: ["Policy Engine", "Decision Layer", "Approval Flows", "Risk & Compliance", "Audit & Traceability", "Strategy & Objectives"]
    },
    {
      name: "MatevIA Core",
      className: "layer-core",
      subtitle: "Core ERP AI-native e orchestrazione",
      points: ["Process Orchestration", "AI Context Engine", "Unified Data Fabric", "Enterprise Search", "Workflow Automation", "AI Agents Framework"]
    },
    {
      name: "DEX",
      className: "layer-dex",
      subtitle: "Layer di execution industriale e operativita",
      points: ["Execution Runtime", "MES Orchestration", "Scheduling & Work Orders", "Telemetry & Ingestion", "Quality & Validation", "Edge & Device Management"]
    },
    {
      name: "ENX",
      className: "layer-enx",
      subtitle: "Layer di intelligenza energetica e sostenibilita",
      points: ["Energy Data Hub", "Forecasting & Prediction", "Consumption Optimization", "Risk & Cost Analysis", "Sustainability Metrics", "Carbon & Compliance"]
    },
    {
      name: "AI Layer",
      className: "layer-ai",
      subtitle: "Layer di Orchestrazione Cognitiva & Supervisione",
      points: ["AI Orchestration", "Context Engine & Memory", "Multi-AI Management", "Cognitive Supervision", "Anomaly & Drift Detection", "Observability & Insights"]
    }
  ],
  flow: {
    steps: ["Obiettivi", "Decisione", "Pianificazione", "Approvazione", "Esecuzione", "Monitoraggio", "Apprendimento"],
    description: "MatevIA collega gli obiettivi business a decisioni governate, execution controllata e apprendimento operativo misurabile."
  },
  demo: {
    title: "Dimostrazione Operativa MatevIA Ecosystem",
    description: "Demo eseguita usando dati operativi provenienti dall'ambiente di integrazione Alleantia.",
    videoFallback: "Video dimostrativo non ancora disponibile. Inserire il file in /images/ con nome base 'MatevIA_Ecosistem'."
  },
  evidence: {
    title: "Validazione della Governance",
    blocks: [
      {
        kicker: "Blocco evidence 1",
        title: "Validazione Runtime DEX",
        scenarioLabel: "Scenario",
        scenario: "DEX Command Request",
        facts: [
          { label: "Rischio", value: "Medium" },
          { label: "Modalita execution", value: "DryRunOnly" },
          { label: "Risultato", value: "Rejected" },
          { label: "Motivo", value: "Machine state unavailable" },
          { label: "Approvazione", value: "Required" },
          { label: "Live Execution", value: "Blocked" }
        ],
        numericTimeline: true,
        timeline: ["Verify DEX State", "Read Available Machines", "Prepare Command Request", "Approval Required", "Runtime Validation", "Safe Rejection"],
        description: "DEX valida la realta operativa prima di qualsiasi execution. Se lo stato macchina non e disponibile, il comando viene rifiutato in modo sicuro.",
        principles: [
          "ORX prepara il piano governato",
          "DEX valida lo stato runtime",
          "Live execution resta bloccata",
          "L'approvazione e richiesta prima dei comandi sensibili",
          "Uno stato operativo non sicuro produce un rifiuto sicuro"
        ]
      },
      {
        kicker: "Blocco evidence 2",
        title: "Validazione Governance ORX",
        scenarioLabel: "Workflow",
        scenario: "Customer Reactivation with Margin Guard",
        facts: [
          { label: "Rischio", value: "High" },
          { label: "Autonomia", value: "ApprovalRequired" },
          { label: "Confidence", value: "78%" },
          { label: "Authority Status", value: "LiveCandidateGuarded" },
          { label: "Can Dry Run", value: "YES" },
          { label: "Can Submit Live Execution", value: "YES" },
          { label: "Can Unlock Writes", value: "NO" },
          { label: "Write-Ready Routes", value: "4" },
          { label: "Approvazioni", value: "2 approved" },
          { label: "Dry Run", value: "Completed" },
          { label: "Live Canary", value: "Completed" },
          { label: "ERP Writes", value: "Blocked" },
          { label: "Audit Trail", value: "Ready" }
        ],
        metricsTitle: "Metriche di governance",
        metrics: [
          { label: "Governance Score", value: "43%" },
          { label: "Autonomy Score", value: "60%" },
          { label: "Memory Coverage", value: "0%" },
          { label: "Policy Decisions Applied", value: "4" },
          { label: "Approval Requests", value: "2" },
          { label: "Audit Events", value: "6" }
        ],
        numericTimeline: false,
        timeline: [
          "09:11:08 - Plan Generated",
          "09:11:22 - Dry Run Completed",
          "09:11:25 - Governance Review Requested",
          "09:11:38 - Approval Approved: calculate_margin",
          "09:11:38 - Approval Approved: generate_offer",
          "09:11:43 - Live Canary Completed"
        ],
        description: "Questa validazione mostra come ORX trasformi un obiettivo business in capability ERP-agnostic, applichi controlli policy, richieda approvazioni per azioni con impatto economico, esegua Dry Run governati e preservi un Audit Trail riproducibile.",
        principles: [
          "Goal tradotto in capability ERP-agnostic",
          "Governance policy-based applicata",
          "Le azioni con impatto economico richiedono approvazione",
          "Dry Run eseguito in sicurezza",
          "Live Canary eseguito sotto guardrail",
          "Sblocco scritture ERP ancora bloccato",
          "Audit replay disponibile"
        ]
      }
    ]
  },
  validation: {
    title: "Cosa Dimostra Questa Validazione",
    points: [
      "ORX decide e governa",
      "DEX valida la realta operativa",
      "MatevIA orchestra e registra",
      "Execution resta controllata",
      "Le azioni sensibili richiedono approvazione",
      "Le scritture live restano protette",
      "L'evidenza di audit e riproducibile",
      "La governance precede l'autonomia"
    ],
    callout: "Decision ≠ Execution",
    orx: "ORX decide.",
    dex: "DEX valida.",
    matevia: "MatevIA governa."
  },
  foundation: {
    title: "Fondamenta dell'Ecosistema",
    items: ["Security & IAM", "Data Governance", "Infrastructure", "Scalability", "Reliability", "Compliance", "Observability"]
  },
  notice: "Questo materiale e riservato ed e destinato esclusivamente a partner MatevIA selezionati, investitori e revisori autorizzati. Non distribuire, copiare o condividere esternamente senza autorizzazione scritta."
};

function encodeBase64(bytes) {
  return Buffer.from(bytes).toString("base64");
}

async function deriveKey(passwordText, salt) {
  const baseKey = await subtle.importKey("raw", new TextEncoder().encode(passwordText), "PBKDF2", false, ["deriveKey"]);
  return subtle.deriveKey(
    { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );
}

const salt = webcrypto.getRandomValues(new Uint8Array(16));
const iv = webcrypto.getRandomValues(new Uint8Array(12));
const key = await deriveKey(password, salt);
const ciphertext = await subtle.encrypt(
  { name: "AES-GCM", iv },
  key,
  new TextEncoder().encode(JSON.stringify(content))
);

const generated = `window.MateviaEcosystemPayload = ${JSON.stringify({
  version: 1,
  kdf: "PBKDF2-SHA-256",
  cipher: "AES-256-GCM",
  iterations,
  salt: encodeBase64(salt),
  iv: encodeBase64(iv),
  ciphertext: encodeBase64(new Uint8Array(ciphertext))
}, null, 2)};\n`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, generated, "utf8");
console.log(`Payload area riservata generato: ${outputPath}`);
