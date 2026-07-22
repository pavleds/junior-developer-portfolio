# Kafa — Café Operations Portfolio App

Kafa is a self-contained café operations demo built with HTML, CSS, and JavaScript. It is designed as a realistic portfolio project rather than a production point-of-sale system.

## Features

- Cashier register with categories, search, cart quantities, dine-in/takeaway, and tables
- Kitchen board with waiting, preparing, and ready stages
- Menu management with availability toggles and custom products
- Daily reporting with revenue, average order, popular products, hourly chart, recent orders, and CSV export
- Serbian and English interfaces
- Browser storage so demo data survives refreshes
- Responsive desktop, tablet, and mobile layouts
- One-click demo reset

## Run

Open `index.html` in a modern browser. No installation or server is required.

## Portfolio framing

This project demonstrates interface design, state management, filtering, calculations, browser persistence, responsive CSS, localization, and a multi-step operational workflow.

## Production limitations

This is not a certified POS or fiscal cash register. It has no authentication, cloud database, real-time multi-device sync, payment processing, fiscal receipt integration, backups, or production security. Those would be separate requirements before use in a real business.
## Recent polish

- Kitchen orders now stay synchronized with the live status counts.
- Menu actions, order controls and kitchen tickets have clearer focus and motion states.
- The demo remains local-first and uses browser storage; it does not process real payments.
