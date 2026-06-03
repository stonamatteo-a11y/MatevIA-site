# matevia-site
Static informational site for `matevia.it`.

## Scope

The repository contains only static pages and assets:

- `index.html`
- `piattaforma-ai.html`
- `orx.html`
- `schermate-reali.html`
- legal pages (`privacy.html`, `cookie-policy.html`, `termini-condizioni.html`)
- static assets in `/assets` and `/Images`
- area riservata statica in `/ecosystem/`
- payload cifrato per area riservata in `/private-content/`

## Local preview

Open `index.html` directly in browser for a quick check, or serve the folder with any static web server.

Example (PowerShell + Python):

```powershell
cd .\matevia-site
python -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.

## Deployment

Deploy as static site (e.g. GitHub Pages) preserving root paths and `sitemap.xml`.

## Area riservata MatevIA Ecosystem

URL pagina privata:

```text
https://matevia.it/ecosystem/
```

La password non e' hardcoded nel frontend. Il sito e' statico, quindi la protezione usa un payload cifrato AES-GCM generato a partire dalla variabile ambiente `MATEVIA_ECOSYSTEM_PASSWORD`.

Generazione del payload:

```powershell
$env:MATEVIA_ECOSYSTEM_PASSWORD="password-operativa"
node .\runtime-tools\generate-ecosystem-auth.mjs
```

Il comando genera:

```text
private-content/ecosystem-auth.generated.js
```

File media da inserire:

- immagine ecosistema: `images/immagine interna.png`, `.jpg`, `.jpeg` o `.webp`
- video demo: `images/MatevIA_Ecosistem.mp4`, `.webm` o `.mov`

La pagina prova anche `images/Immagine Interna.*` per compatibilita con file gia' presenti. Se immagine o video non esistono, viene mostrato un fallback testuale e la build non si rompe.

Test manuale:

1. Generare il payload con `MATEVIA_ECOSYSTEM_PASSWORD`.
2. Avviare un server statico: `python -m http.server 8080`.
3. Aprire `http://127.0.0.1:8080/ecosystem/`.
4. Senza password deve comparire la schermata di login.
5. Con password errata deve comparire un errore.
6. Con password corretta deve comparire l'area riservata.
7. Usare `Esci` e verificare il ritorno alla schermata password.

Limiti tecnici:

- Il progetto non ha backend: la verifica non puo' essere server-side.
- Il payload cifrato evita contenuti riservati in chiaro dentro HTML/JS pubblico, ma un attaccante puo' comunque scaricare il payload e tentare un attacco offline sulla password.
- I file in `/images/` restano accessibili direttamente se il sito viene servito come statico puro. Per media realmente sensibili serve un backend, storage privato o CDN con URL firmati.
- `robots.txt` contiene `Disallow: /ecosystem` e la pagina usa `noindex,nofollow`, ma questi controlli non sono una misura di sicurezza.
