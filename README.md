# Saptarshi Bagchi Portfolio

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`.
## Google Analytics

Create a GA4 property in Google Analytics and copy its Measurement ID (`G-...`).
Copy `.env.example` to `.env.local` and set `VITE_GA_MEASUREMENT_ID` to that ID.
For Vercel, add the same variable in Project Settings → Environment Variables,
then redeploy. Analytics stays disabled when the variable is missing or invalid.

## Where to edit what

| What | File |
| --- | --- |
| Personal content, links, education, skills, projects | `src/data.js` |
| Page section order | `src/App.jsx` |
| Section markup | `src/components/` |
| Colors, layout, global stylesheet | `src/index.css` |
