# Spark Dating

This repository includes both requested deliverables:

- `mobile-app/` - Expo React Native mobile app (OTP login, profile setup, swipe flow)
- `admin-panel/` - React admin panel (login, dashboard, user management table)
- `firebase/` - starter Firebase security rules

## Run locally

### Mobile app

```bash
cd mobile-app
npm install
npm start
```

### Admin panel

```bash
cd admin-panel
npm install
npm start
```

Admin credentials: `admin` / `admin123`.

---

## GitHub push setup

If this local repo has no remote configured, add your GitHub repo and push:

```bash
git remote add origin https://github.com/Mitpatel13/Spark.git
git push -u origin work
```

If `origin` already exists:

```bash
git remote set-url origin https://github.com/Mitpatel13/Spark.git
git push -u origin work
```

---

## Vercel deployment (Admin Panel - Web)

The web app can be hosted on Vercel from `admin-panel/`.

### 1) Import project in Vercel

- Go to Vercel dashboard → **Add New Project**
- Import `Mitpatel13/Spark`
- Set **Root Directory** to `admin-panel`
- Framework preset: **Create React App**
- Build command: `npm run build`
- Output directory: `build`

`admin-panel/vercel.json` is already configured for SPA routes.

### 2) GitHub Actions auto-deploy pipeline

This repo includes:

- `.github/workflows/ci.yml` (build/check for admin + mobile)
- `.github/workflows/deploy-vercel.yml` (production deploy for admin panel)

Add these GitHub repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

How to get IDs:

```bash
cd admin-panel
npx vercel link
cat .vercel/project.json
```

### 3) Get live app link

After first successful deployment, Vercel gives:

- Production URL: `https://<your-project>.vercel.app`

You can also attach a custom domain in Vercel settings.

---

## Mobile app publishing note

Vercel hosts web apps, not native Android/iOS binaries.

For mobile app publishing use Expo/EAS:

```bash
cd mobile-app
npx expo login
npx eas build -p android
npx eas build -p ios
```

- Android: submit `.aab` to Play Console
- iOS: submit build to App Store Connect

You can still run and share the app with Expo links during testing.
