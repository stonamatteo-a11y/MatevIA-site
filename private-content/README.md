# private-content

Cartella predisposta per futuri evidence pack `.json` o `.md`.

In una distribuzione statica questa cartella e' comunque pubblicabile dal web server. Non inserire report sensibili in chiaro: usare contenuti cifrati o una verifica lato server.

Il file `ecosystem-auth.generated.js` viene generato da:

```powershell
$env:MATEVIA_ECOSYSTEM_PASSWORD="password-operativa"
node .\runtime-tools\generate-ecosystem-auth.mjs
```
