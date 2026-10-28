# EODIYA COFFEE

- Marketing: https://spplz.github.io/EDY/
- Menu and ordering: https://spplz.github.io/EDY/menu/
- Frozen ver.WW01: https://spplz.github.io/DC/ver.WW01.html
- Frozen WW01 source: https://spplz.github.io/DC/ver.WW01-source.zip
- Current ordering source: https://spplz.github.io/EDY/menu/order-source.zip

DC/index.html redirects to EDY. All DC archive files and their assets are preserved. EDY marketing is static HTML/CSS/JS; EDY/menu is a built React app with browser-only checkout, wallet, coupon and stamp simulation. No real payments or orders occur. On first use, EDY imports existing WW01 demo records into separate storage keys. Later EDY changes do not modify the frozen WW01 app records.

For changes to the menu app, extract order-source.zip, run npm ci then npm run build. Vite base is /EDY/menu/. Copy dist files into EDY/menu. The initial HTML embeds the generated JS/CSS. Shared product photography and brand logos live in EDY/. Keep the frozen WW01 files unchanged.
