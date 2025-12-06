# Website Relaunch - Handover Dokument

**Projekt:** Maxflow Software Website Umgestaltung
**Datum:** 2025-12-05
**Status:** In Planung - Bereit zur Umsetzung

---

## 🎯 ZIEL DER UMGESTALTUNG

### Problem:
- ❌ Zu viele Tech-Begriffe (Next.js, React, TypeScript)
- ❌ Spricht IT-Fachleute an statt normale Unternehmer
- ❌ Zu wenig visuelle Beispiele (Mockups, Wireframes fehlen)
- ❌ Software-Angebote nicht klar genug hervorgehoben (nicht nur Websites!)

### Zielgruppe:
- ✅ Kleine bis mittlere Unternehmen
- ✅ Raum Bad Tölz - Wolfratshausen - München
- ✅ Menschen OHNE IT-Kenntnisse
- ✅ Branchenübergreifend (Restaurant, Handwerk, Dienstleister, etc.)

### Lösung:
1. **Texte vereinfachen** - Unternehmer-Sprache statt Developer-Sprache
2. **Visuelle Beispiele** - 3D Mockups, Wireframes, Device-Previews
3. **Beide Bereiche klar** - Websites UND Software gleichwertig

---

## 📋 GEPLANTE ÄNDERUNGEN

### 1. Hero Section

**❌ VORHER:**
```
Maßgeschneiderte Software, die Ihr Business transformiert
Individuelle Programme und Websites – entwickelt mit neuesten Technologien
Tech Stack: Next.js, React, TypeScript, Tailwind CSS, Node.js
```

**✅ NACHHER:**
```
Websites & Software für Ihr Unternehmen
Bad Tölz • Wolfratshausen • München

Von der Idee bis zum fertigen Produkt –
Wir entwickeln digitale Lösungen, die zu Ihnen passen

[3D Browser-Mockup Animation hier]

Keine Tech-Stack Pills mehr!
```

**Datei:** `/components/home/HeroSection.tsx`

---

### 2. Leistungen Section

**❌ VORHER:**
```
Maßgeschneiderte Software-Entwicklung
Entwicklung individueller Desktop-Anwendungen, Web-Apps...
Technologien: React, TypeScript, Tauri, Node.js
```

**✅ NACHHER:**
```
Software für Ihren Betrieb
Zeitraubende Abläufe automatisieren

Was wir für Sie tun:
• Wiederholende Aufgaben automatisieren
• Papier-Chaos durch digitale Lösungen ersetzen
• Fehler durch manuelle Eingaben vermeiden

Beispiele:
🏨 Hotel-Buchungssoftware - Zimmer & Gäste verwalten
📊 Steuer-Software - EÜR automatisch erstellen
📦 Lagerverwaltung - Material im Blick behalten

Statt Excel-Chaos: Ihre eigene Software!
```

**Datei:** `/app/leistungen/page.tsx`

---

### 3. Neue Components (zu erstellen)

#### A) 3D Browser-Mockup Component
```tsx
// /components/shared/BrowserMockup.tsx
// Zeigt animiertes Browser-Fenster mit rotierenden Screenshots
// 3D Tilt-Effekt beim Hover
// Verschiedene Projekt-Beispiele durchlaufen lassen
```

#### B) Device-Mockup Component
```tsx
// /components/shared/DeviceMockup.tsx
// Zeigt Laptop + Mobile zusammen
// Responsive Design demonstrieren
// Für Portfolio-Section
```

#### C) Prozess-Visualisierung Component
```tsx
// /components/home/ProcessVisualization.tsx
// 4 Schritte zeigen:
// 1. Wireframe (Skizze)
// 2. Design (Mockup)
// 3. Entwicklung (Code-Visualisierung)
// 4. Fertig (Live-Screenshot)
```

---

### 4. Portfolio Umstrukturierung

**Kategorien klar trennen:**

#### **Websites:**
- Restaurant-Website (Beispiel)
- Hotel-Website (Beispiel)
- Corporate Website (Placeholder vorhanden)

#### **Software (Programme):**
- Hotel-Buchungssoftware ✅ (Echtes Projekt!)
- Steuer-Software für Kleinunternehmer ✅ (Echtes Projekt!)
- Lagerverwaltung (Beispiel)

**Portfolio-Cards:**
- Von flachen Screenshots zu 3D Device-Mockups
- Hover = Zeigt weitere Screens
- Category Badge deutlicher (Website vs. Software)

**Datei:** `/components/portfolio/PortfolioGrid.tsx`

---

### 5. Über uns Section

**❌ VORHER:**
```
Wir entwickeln individuelle Softwarelösungen und moderne Websites,
die perfekt auf die Bedürfnisse unserer Kunden zugeschnitten sind.
```

**✅ NACHHER:**
```
Ihr Partner für digitale Lösungen
in Bad Tölz, Wolfratshausen & München

Seit [Jahr] entwickeln wir Websites und Software für Unternehmen
jeder Größe – vom kleinen Betrieb bis zum mittelständischen Unternehmen.

Was uns auszeichnet:
• Persönliche Beratung vor Ort
• Klare Kommunikation ohne Fachchinesisch
• Faire Preise, transparente Abläufe
• Auch nach Projektabschluss für Sie da
```

**Datei:** `/app/ueber-uns/page.tsx`

---

## 🎨 DESIGN-ÄNDERUNGEN

### Beizubehalten:
- ✅ Modernes Design
- ✅ Animationen (Framer Motion)
- ✅ Farbschema (Indigo/Purple/Pink)
- ✅ Responsive Layout
- ✅ Performance-Optimierungen

### Zu ändern:
- ❌ Tech-Stack Pills entfernen (Hero)
- ❌ Tech-Begriffe in Texten ersetzen
- ➕ 3D Mockups hinzufügen
- ➕ Prozess-Visualisierung hinzufügen
- ➕ Device-Previews im Portfolio

---

## 📁 DATEIEN ZU BEARBEITEN

### Priorität 1 (Texte vereinfachen):
1. `/components/home/HeroSection.tsx` - Hero umschreiben
2. `/app/leistungen/page.tsx` - Leistungen vereinfachen
3. `/app/ueber-uns/page.tsx` - Über uns lokalisieren
4. `/components/home/WhyMaxflowSection.tsx` - Nutzen statt Features
5. `/app/page.tsx` - Meta Description anpassen

### Priorität 2 (Visuelle Komponenten):
1. `/components/shared/BrowserMockup.tsx` - NEU erstellen
2. `/components/shared/DeviceMockup.tsx` - NEU erstellen
3. `/components/home/ProcessVisualization.tsx` - NEU erstellen
4. `/components/portfolio/PortfolioGrid.tsx` - Mockups integrieren

### Priorität 3 (SEO & Lokalisierung):
1. `/app/layout.tsx` - Meta Keywords anpassen
2. `/public/sitemap.xml` - Lokale Keywords
3. Google Business Profile erstellen (manuell)

---

## 🔧 TECHNISCHE DETAILS

### Aktuelle Tech Stack (bleibt):
- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- Vercel Hosting

### Neue Dependencies (eventuell):
```bash
# Für 3D Mockups:
npm install three @react-three/fiber @react-three/drei
# (Optional - nur wenn 3D Browser-Mockup zu aufwändig mit CSS)
```

---

## 📊 ERFOLGS-METRIKEN

### Vorher (aktuell):
- Lighthouse Performance: 75/100
- Lighthouse Accessibility: 94/100
- Lighthouse Best Practices: 100/100
- Lighthouse SEO: 100/100

### Nachher (Ziel):
- Lighthouse Performance: > 80/100 (trotz mehr Visuals)
- Konversionsrate: Messbar durch Google Search Console
- Lokale Suche: Rankings für "Website Bad Tölz", "Software München"

---

## 🚀 UMSETZUNGS-PLAN

### Phase 1: Texte (1-2 Stunden)
- [ ] Hero Section umschreiben
- [ ] Leistungen vereinfachen
- [ ] Über uns lokalisieren
- [ ] Portfolio-Beschreibungen anpassen
- [ ] Meta Descriptions updaten

### Phase 2: Mockup-Components (2-3 Stunden)
- [ ] BrowserMockup.tsx erstellen
- [ ] DeviceMockup.tsx erstellen
- [ ] ProcessVisualization.tsx erstellen
- [ ] In Hero Section integrieren
- [ ] In Portfolio integrieren

### Phase 3: Testing & Deployment (30 Min)
- [ ] Lighthouse Audit
- [ ] Mobile Testing
- [ ] Browser Testing (Chrome, Firefox, Safari)
- [ ] Git Commit & Push
- [ ] Vercel Deployment

---

## 🎯 WICHTIGE PRINZIPIEN

### Text-Änderungen:
1. **Nutzen statt Features** - "Mehr Kunden" nicht "Performance-Optimierung"
2. **Einfache Sprache** - Keine Fachbegriffe ohne Erklärung
3. **Konkrete Beispiele** - "Hotel-Buchungssoftware" nicht "Enterprise Solutions"
4. **Lokaler Bezug** - "Bad Tölz • München" prominent platzieren
5. **Beide Bereiche** - Software UND Websites gleichwertig behandeln

### Design-Änderungen:
1. **Mehr Visuals** - Mockups statt nur Text
2. **Prozess zeigen** - Wireframe → Design → Code → Live
3. **Geräte-Vielfalt** - Desktop + Mobile zusammen zeigen
4. **Animationen behalten** - Aber nicht übertreiben
5. **Performance** - Lazy Loading für Mockups nutzen

---

## 📚 REFERENZEN & INSPIRATION

### Gute Beispiele (aus Research):
- **Niovo Webstudios** - Klare Sprache für Handwerk
- **Webdesign Köln** - Konkrete Erfolge ("30% mehr Reservierungen")
- **LoveBrands** - Emotionale, aber professionelle Ansprache

### Was sie richtig machen:
- ✅ Nutzen-orientierte Sprache
- ✅ Lokaler Bezug
- ✅ Konkrete Beispiele
- ✅ Erfolge zeigen
- ✅ Einfache Navigation

---

## 🎨 MOCKUP-RESSOURCEN

### Für 3D Browser-Mockup:
```css
/* Perspektive für 3D-Effekt */
.browser-mockup {
  transform: perspective(1000px) rotateY(-15deg) rotateX(10deg);
  transition: transform 0.3s ease;
}

.browser-mockup:hover {
  transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
}
```

### Für Device-Mockup:
- Laptop-Frame: CSS Border-Radius + Box-Shadow
- Mobile-Frame: Aspect Ratio 9:19.5 (iPhone 14)
- Tablet-Frame: Aspect Ratio 4:3 (iPad)

### Screenshot-Rotation:
```tsx
// Array von Projekt-Screenshots
const screenshots = [
  '/images/projects/hotel-booking-1.png',
  '/images/projects/tax-software-1.png',
  '/images/projects/corporate-placeholder.svg',
]

// Automatisch alle 3 Sekunden wechseln
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }, 3000)
  return () => clearInterval(interval)
}, [])
```

---

## 🔗 WICHTIGE LINKS

- **Live-Site:** https://maxflow-software.de
- **Vercel Dashboard:** https://vercel.com/maxwellbadger-1s-projects/maxflow-software-website
- **GitHub Repo:** https://github.com/Maxwellbadger-1/maxflow-software-website
- **Google Search Console:** https://search.google.com/search-console (verifiziert ✅)
- **Lighthouse Report:** `/lighthouse-report.html` (lokal)

---

## 📝 NEXT STEPS

### Sofort starten mit:

1. **Hero Section umschreiben:**
```bash
# Datei öffnen:
code /components/home/HeroSection.tsx

# Zeilen 57-78 ersetzen (Headline + Subheadline)
# Zeilen 108-122 entfernen (Tech Stack Pills)
```

2. **BrowserMockup Component erstellen:**
```bash
# Neue Datei:
code /components/shared/BrowserMockup.tsx

# Component mit animiertem Browser-Fenster
# Screenshots rotieren lassen
```

3. **In Hero integrieren:**
```tsx
// Nach Subheadline (Zeile 79):
<BrowserMockup screenshots={[...]} />
```

---

## ⚠️ WICHTIG - NICHT VERGESSEN

1. **Software betonen!** - Nicht nur Websites, auch Programme!
2. **Beide Projekte nutzen** - Hotel-Software UND Steuer-Software sind echte Projekte!
3. **Lokal bleiben** - Bad Tölz bis München ist die Hauptzielgruppe
4. **Einfach kommunizieren** - Unternehmer verstehen "EÜR automatisch erstellen" besser als "TypeScript-basierte Full-Stack Solution"

---

## 🎯 ERFOLGS-KRITERIEN

Die Umgestaltung ist erfolgreich wenn:
- ✅ Ein Nicht-IT-ler versteht sofort was du anbietest
- ✅ Software und Websites gleichwertig präsentiert sind
- ✅ Visuelle Beispiele zeigen wie Projekte aussehen
- ✅ Lokaler Bezug ist klar (Bad Tölz - München)
- ✅ Lighthouse Score bleibt > 75 Performance
- ✅ Google Search Console zeigt steigende Klicks

---

## 📞 KONTAKT & FRAGEN

Bei Fragen zum Handover:
- **ROADMAP.md** - Komplette Projekt-Historie
- **CLAUDE.md** - Entwicklungs-Richtlinien
- **package.json** - Alle Dependencies

---

**Erstellt:** 2025-12-05
**Bereit für:** Neuen Chat/Session
**Status:** Ready to implement 🚀
