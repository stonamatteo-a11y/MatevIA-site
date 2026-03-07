# SEO + Analytics Setup (matevia-site)

## 1) Google Search Console
1. Apri Search Console e aggiungi proprieta `https://matevia.it`.
2. Metodo consigliato: record DNS TXT sul provider dominio.
3. Dopo verifica, invia sitemap: `https://matevia.it/sitemap.xml`.

## 2) Google Analytics 4
1. Crea proprieta GA4 e copia il Measurement ID (es. `G-XXXXXXXXXX`).
2. Inserisci l'ID nel tag meta in ogni pagina:
   - `<meta name="matevia-ga4-id" content="G-XXXXXXXXXX">`
3. Lo script `/assets/analytics.js` si attiva solo se l'ID e valido.

## 3) Note privacy
- Il sito resta informativo statico.
- Se attivi analytics, aggiorna cookie/privacy policy secondo il tuo assetto legale.
