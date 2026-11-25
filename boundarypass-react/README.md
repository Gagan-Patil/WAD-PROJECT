# BoundaryPass React activity

A small React + Vite version of the BoundaryPass IPL ticket-booking interface.
It is a separate project; the original `WebApp`, `CSS`, and `JAVA_SCRIPT`
folders are not used or changed by this app.

## Run locally

From the repository root:

```powershell
cd boundarypass-react
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).
To check the production build, run `npm run build`.

## Project files

- `src/components/Navbar.jsx` — shared site navigation.
- `src/components/Hero.jsx` — the introductory BoundaryPass banner.
- `src/components/MatchCard.jsx` — a reusable match card; teams, date, venue,
  and ticket prices are passed in as props.
- `src/data/matches.js` — sample match fixtures and prices.
- `src/App.jsx` — stores the selected team with `useState`, filters the sample
  matches, and uses `.map()` to render a card for every match.
- `src/index.css` and `src/App.css` — the navy-and-gold theme and responsive
  layout.

Fixtures and prices are illustrative sample data, not an official schedule.
