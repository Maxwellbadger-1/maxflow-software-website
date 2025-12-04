# Maxflow Software Website

Professionelle Agentur-Website für Maxflow Software mit modernsten Web-Technologien.

**Website:** [maxflow-software.de](https://maxflow-software.de)
**E-Mail:** office@maxflow-software.de

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **UI Components:** shadcn/ui
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Deployment:** Vercel (empfohlen)

---

## 📁 Projekt-Struktur

```
maxflow-website/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home Page
│   ├── leistungen/          # Services Page
│   ├── portfolio/           # Portfolio + Dynamic Routes
│   ├── ueber-uns/           # About Page
│   ├── kontakt/             # Contact Page
│   ├── api/contact/         # Contact Form API
│   ├── layout.tsx           # Root Layout
│   ├── sitemap.ts           # Dynamic Sitemap
│   └── loading.tsx          # Loading States
├── components/
│   ├── home/                # Home Page Components
│   ├── leistungen/          # Services Components
│   ├── portfolio/           # Portfolio Components
│   ├── kontakt/             # Contact Components
│   ├── layout/              # Header & Footer
│   └── shared/              # Reusable Components
├── data/
│   ├── projects.ts          # Portfolio Data
│   └── services.ts          # Services Data
├── lib/
│   ├── animations.ts        # Framer Motion Variants
│   └── utils.ts             # Utility Functions
└── public/
    └── robots.txt           # SEO
```

---

## 🛠️ Installation & Setup

### 1. Repository klonen

```bash
git clone <repository-url>
cd maxflow-website
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. Environment Variables einrichten

Kopiere `.env.example` zu `.env.local` und fülle die Werte aus:

```bash
cp .env.example .env.local
```

Wichtige Variables:
- `RESEND_API_KEY` - Für E-Mail-Versand (optional)
- `CONTACT_EMAIL` - Empfänger für Kontaktformular
- `NEXT_PUBLIC_SITE_URL` - Production URL

### 4. Development Server starten

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000)

---

## 📦 Build & Deployment

### Production Build erstellen

```bash
npm run build
```

### Production Build lokal testen

```bash
npm start
```

### Deployment zu Vercel (Empfohlen)

1. **Vercel Account erstellen:** [vercel.com](https://vercel.com)

2. **Git Repository verbinden:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

3. **In Vercel importieren:**
   - Dashboard → New Project
   - Repository auswählen
   - Environment Variables hinzufügen
   - Deploy

4. **Custom Domain verbinden:**
   - Vercel Dashboard → Settings → Domains
   - maxflow-software.de hinzufügen
   - DNS Records bei Domain-Provider aktualisieren

### Alternative: Static Export zu IONOS

Falls du statisches Hosting bevorzugst:

1. **next.config.ts anpassen:**
```typescript
module.exports = {
  output: 'export',
  images: { unoptimized: true }
}
```

2. **Build erstellen:**
```bash
npm run build
```

3. **out/ Ordner via FTP zu IONOS hochladen**

⚠️ **Hinweis:** Static Export unterstützt keine API Routes. Für Kontaktformular dann FormSubmit.co nutzen.

---

## 🔧 Kontaktformular einrichten

### Option 1: Resend (Empfohlen)

1. Account auf [resend.com](https://resend.com) erstellen
2. API Key generieren
3. In `.env.local` eintragen:
```env
RESEND_API_KEY=re_your_key_here
```

4. Code in `app/api/contact/route.ts` aktivieren (siehe Kommentare)

### Option 2: FormSubmit.co (Einfachste Lösung)

Für Static Export ohne Backend:

```tsx
<form action="https://formsubmit.co/office@maxflow-software.de" method="POST">
  <input type="hidden" name="_next" value="https://maxflow-software.de/kontakt/danke" />
  {/* Deine Form-Felder */}
</form>
```

### Option 3: Nodemailer (SMTP)

Für eigenen SMTP-Server - siehe Code-Kommentare in `route.ts`

---

## 🎨 Customization

### Farben anpassen

Bearbeite `app/globals.css`:

```css
:root {
  --primary: 99 102 241;  /* Indigo */
  /* ... weitere Farben ... */
}
```

### Portfolio-Projekte hinzufügen

Bearbeite `data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "4",
    title: "Dein neues Projekt",
    slug: "dein-projekt",
    // ... weitere Felder
  }
]
```

### Services anpassen

Bearbeite `data/services.ts`

---

## 📊 SEO & Performance

### Bereits implementiert:

✅ **SEO:**
- robots.txt
- Dynamische sitemap.xml
- Structured Data (JSON-LD)
- Open Graph Tags
- Meta Tags für alle Pages

✅ **Performance:**
- Next.js Image Optimization
- Font Optimization (next/font)
- Code Splitting (automatisch)
- Lazy Loading
- Static Generation wo möglich

✅ **Accessibility:**
- Semantic HTML
- ARIA Labels
- Keyboard Navigation
- Skip-to-content Link
- Focus States

### Performance-Ziele:

- Lighthouse Score: > 90 (alle Kategorien)
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

---

## 🧪 Testing

### Lokales Testing

```bash
# Development
npm run dev

# Production Build
npm run build
npm start
```

### Responsive Testing

Teste folgende Breakpoints:
- 375px (iPhone SE)
- 768px (Tablet)
- 1024px (Desktop)
- 1920px (Full HD)

### Browser Testing

- Chrome (latest)
- Firefox (latest)
- Safari (macOS & iOS)
- Edge (latest)

---

## 📝 Scripts

```bash
npm run dev      # Development Server (Port 3000)
npm run build    # Production Build
npm start        # Production Server
npm run lint     # ESLint
```

---

## 🐛 Troubleshooting

### Build Fehler

```bash
# Node Modules löschen und neu installieren
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Fehler

```bash
# TypeScript Cache löschen
rm -rf .next
npm run build
```

### Framer Motion Warnings

Stelle sicher, dass alle animierten Components mit 'use client' markiert sind.

---

## 📄 Lizenz & Kontakt

**Maxflow Software**
E-Mail: office@maxflow-software.de
Website: [maxflow-software.de](https://maxflow-software.de)

Erstellt mit Next.js, Tailwind CSS und ❤️

---

## 🎯 Nächste Schritte nach Deployment

1. ✅ E-Mail-Versand testen
2. ✅ Google Search Console einrichten
3. ✅ Google Analytics hinzufügen (optional)
4. ✅ Domain SSL-Zertifikat prüfen
5. ✅ Echte Projekt-Bilder hochladen
6. ✅ Impressum mit echten Daten füllen
7. ✅ Datenschutzerklärung generieren (e-recht24.de)
