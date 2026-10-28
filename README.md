# SPPLZ web projects

- Home: https://spplz.github.io/
- DC: https://spplz.github.io/DC/

DC is an educational browser-only cafe ordering demo. Orders, coupons, wallet balance and stamps are saved in localStorage per browser. Payment choices simulate payment; no real charges, server approval, or SSE service is provided on GitHub Pages. Status transitions are simulated locally (8 seconds preparing, 20 seconds ready). No real store receives orders. Test redemption codes: WELCOME1000 and GIFT10000, once each per browser.

## Update DC

Source is supplied as `dc-source.zip` (extract its DC folder). Use Node.js 22.12+ and npm:

    cd source/DC
    npm ci
    npm run build

Copy the contents of `dist` to the repository's `DC/` directory and commit. The initial published HTML embeds its compiled JS/CSS for a simple browser upload; later builds may use normal dist/assets files. Keep the Vite base `/DC/`. GitHub Pages serves `main` branch root. Built files are committed so deployment requires no Node build service. Do not store real personal data or secrets here. The separate full Next.js backend version remains in the original project backup.
