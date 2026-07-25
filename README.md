# Vaishnavi Mahajan — Portfolio

## Run locally (VS Code)

1. Open this folder in VS Code
2. Open terminal, run:
   ```
   npm install
   npm run dev
   ```
3. Open the link it prints (usually http://localhost:5173)

## Before deploying — fill these in

- `src/App.jsx` → `PROJECTS` array: replace each `github` URL with the exact repo link (ChatVerse, VolunteerBridge, SkillSync)
- `src/App.jsx` → `LINKS.leetcode`: add your LeetCode profile URL
- `public/photo.jpg` → replace if you want a different photo (keep the filename `photo.jpg`, or update the `src="/photo.jpg"` in App.jsx)
- `public/resume.pdf` → already added from your uploaded resume; replace anytime by dropping a new `resume.pdf` in `public/`

## Deploy (Vercel — easiest)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → import the repo
3. Framework preset: Vite (auto-detected) → Deploy
4. Done — you'll get a live URL to share with recruiters

## Deploy (Netlify)

1. Push to GitHub
2. https://app.netlify.com → Add new site → Import from Git
3. Build command: `npm run build`, publish directory: `dist`
