# Velvet Wolf Café

A responsive React website for **Velvet Wolf** — a premium coffee brand with locations in the UK and Kuwait. Design inspired by the stitch HTML mockups: white-and-gold minimalism, architectural precision, and quiet luxury.

## Features

- **Home page** — full-screen cinematic hero (desktop), mobile hero with gradient overlay, philosophy intro, craft bento grid, product showcase, locations teaser, ethos section, newsletter, and social links
- **Locations page** — bento-style UK/Kuwait location cards with map panels, global expansion roadmap, and journal newsletter
- **Responsive design** — desktop layout from `stitch.html` / `stitch2.html`, mobile layout from `stitch3.html` with hamburger menu and floating bottom nav
- **Design system** — gold ink (`#D4AF37`), wolf black (`#121212`), soft gray surface (`#F9F9F9`), Metropolis + Source Serif 4 typography

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Fixed nav (desktop links + mobile menu trigger)
│   ├── MobileNav.jsx       # Fullscreen overlay menu
│   ├── MobileBottomNav.jsx # Floating pill nav (mobile only)
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Icon.jsx            # Material Symbols wrapper
│   └── Wordmark.jsx
├── pages/
│   ├── HomePage.jsx        # stitch.html + stitch3.html
│   └── LocationsPage.jsx   # stitch2.html
├── data/content.js         # Images, products, locations
├── hooks/useScrollReveal.js
└── index.css               # Tailwind theme + typography
```

## Pages

| Route | Source mockup |
|-------|---------------|
| `/` | `stitch.html` (desktop) + `stitch3.html` (mobile) |
| `/locations` | `stitch2.html` |

## Customization

- **Images & copy** — `src/data/content.js`
- **Colors & fonts** — `src/index.css` (`@theme` block)
- **Social links** — `src/data/content.js` → `socialLinks`

## License

Private project for Velvet Wolf Café.
