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
