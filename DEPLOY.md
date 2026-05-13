# Deployment Guide — saqibb.dev

## Stack
Next.js 14 · TypeScript · Tailwind · Framer Motion · EmailJS

## Hosting: Vercel (free)
Domain: saqibb.dev via name.com (GitHub Education)

## One-Time Deploy Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "feat: ready for production"
git push origin main
```

### 2. Connect to Vercel
- Go to vercel.com → New Project → Import saqibb-dev repo
- Framework: Next.js (auto-detected)
- Click Deploy — first deploy takes ~2 minutes

### 3. Add Environment Variables in Vercel
Dashboard → Project → Settings → Environment Variables
Add all three variables from .env.local (your real keys, not placeholders):
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```
Then: Deployments → Redeploy (to apply env vars)

### 4. Add Custom Domain
Dashboard → Project → Settings → Domains
Type: saqibb.dev → Add

Vercel will give you two DNS records:
```
A     @    76.76.21.21
CNAME www  cname.vercel-dns.com
```

### 5. Add DNS Records on name.com
name.com Dashboard → your domain → Manage → DNS Records
Delete any existing A records for @
Add the two records above
Propagation: 5–60 minutes

### 6. SSL
Vercel auto-provisions HTTPS once DNS propagates. No action needed.

## Redeployment (every future change)
```bash
git push origin main
```
Vercel auto-deploys on every push. No manual steps.

## Local Development
```bash
npm run dev          # → http://localhost:3000
npm run build        # → production build check
npm run lint         # → check for errors
```
