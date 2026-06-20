# LLP "ZHETYSU KAZYNASY" OIL REFINERY — Corporate Website

A fully **static** corporate website for LLP "ZHETYSU KAZYNASY" OIL REFINERY, built with **React + Vite + Tailwind CSS**.

No backend, no API calls, no paid integrations — every page renders entirely from static data.

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 18 + Vite                     |
| Styling     | Tailwind CSS + shadcn/ui            |
| Routing     | React Router DOM v6                 |
| Animation   | Framer Motion                       |
| Icons       | Lucide React                        |

---

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── About.jsx           # Company history & values
│   ├── Service.jsx         # Products & services catalogue
│   ├── RequestService.jsx  # Contact / enquiry form (mailto: static)
│   └── ThankYou.jsx        # Post-submission confirmation
│
├── components/
│   ├── Navbar.jsx              # Fixed top navigation
│   ├── Footer.jsx              # Site-wide footer
│   ├── ScrollToTop.jsx         # Floating scroll-to-top button
│   ├── ExchangeTicker.jsx      # Static petroleum price ticker banner
│   └── TestimonialsCarousel.jsx # Animated client testimonials
│
├── lib/
│   ├── constants.js        # ★ Single source of truth — company info,
│   │                       #   products, services, nav links, ticker data
│   └── ...                 # Auth context, query client, utilities
│
└── App.jsx                 # Router + providers
```

---

## Key Design Decisions

### Fully Static — No Credits / No API
- All data (products, prices, company info) lives in `lib/constants.js`.
- The **Request Service** form uses a `mailto:` link — clicking Submit opens the user's email client pre-filled with the enquiry. No server or database required.
- The exchange ticker shows **reference/indicative** petroleum prices. Update values in `lib/constants.js` → `TICKER_ITEMS`.

### Single Source of Truth
All shared data is defined once in `lib/constants.js`:
- `COMPANY` — name, address, phone, email, BIN, head, etc.
- `PRODUCTS` — full petroleum product catalogue
- `SERVICES` — operational service cards
- `SERVICE_TYPES` — dropdown options for the request form
- `TICKER_ITEMS` — exchange ticker price data
- `NAV_LINKS`, `STATS`, `CERTIFICATIONS`

To update company information, edit only `lib/constants.js`.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Company Information

| Field   | Value                                      |
|---------|--------------------------------------------|
| Company | LLP "ZHETYSU KAZYNASY" OIL REFINERY        |
| BIN     | 050740001488                               |
| Address | 050012, Almaty, Nursultan Nazarbayev Ave., Furmanova 177, apt. 7, Almaty District, Republic of Kazakhstan |
| Email   | info@zhetysukazynasy-oil.kz               |
| Phone   | +7 747 052 4475                           |
| Website | www.zhetysukazynasy-oil.kz                |

---

## Logo

```
https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/75616e06b_generated_a1354d0d.png
``