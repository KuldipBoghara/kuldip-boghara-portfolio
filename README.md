# Kuldip Boghara — portfolio

Personal site: [kuldip-boghara-portfolio.vercel.app](https://kuldip-boghara-portfolio.vercel.app/)

React + Vite, plain CSS with light and dark themes. No UI or animation libraries.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static output in dist/
```

## Where things live

```
src/data.js      projects, experience, education, skills — edit content here
src/Work.jsx     horizontal project track, per-project screenshot carousel, lightbox
src/App.jsx      header (theme toggle), hero, experience, skills, contact
src/index.css    theme tokens (light / dark) and all styles
public/images/work/   project screenshots (1440×900 webp)
```

## Screenshots

Most client platforms are behind a login, so their screenshots are recreated from each project's own
code and design tokens with sample data — no real customer data. Public websites
(adroitconnecthospitality.com, absmep.com) are real captures of the live sites.

To add a project: drop 1440×900 `.webp` files in `public/images/work/` and add an entry to `projects`
in `src/data.js`.
