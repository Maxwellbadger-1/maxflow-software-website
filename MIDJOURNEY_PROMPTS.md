# Midjourney Prompts für Maxflow Software Website

## Hero Section - Video Background

### Prompt 1: Code Animation (Empfohlen)
```
cinematic close-up of modern code editor on sleek laptop screen, dark theme with blue and purple syntax highlighting, soft keyboard typing animation, shallow depth of field, professional software development workspace, ambient blue-purple gradient lighting, 4K resolution, photorealistic, cinematic color grading, --ar 16:9 --style raw --v 6.1
```

### Prompt 2: Abstract Tech Flow
```
abstract flowing data streams and code particles, dark navy blue background with electric blue and purple accents, subtle geometric patterns, minimal clean design, modern tech aesthetic, glass morphism effect, soft glowing light, 4K cinematic, --ar 16:9 --style raw --v 6.1
```

### Prompt 3: Holographic Interface
```
futuristic holographic user interface with floating screens and data visualizations, dark background, blue and purple neon accents, clean minimalist design, professional software development concept, cinematic lighting, depth of field, photorealistic, --ar 16:9 --style raw --v 6.1
```

---

## Hero Section - Static Hero Image

### Prompt 1: Developer Workspace (Beste Balance)
```
ultra-modern developer workspace from above, MacBook Pro with clean code editor, wireless keyboard and mouse, minimalist desk setup, dark theme interface with blue-purple accent colors, professional studio lighting, depth of field, photorealistic, high-end tech photography, --ar 16:9 --style raw --v 6.1
```

### Prompt 2: Laptop + Code (Fokus auf Screen)
```
sleek modern laptop on dark minimalist desk, screen showing beautiful code editor with TypeScript React code, blue and purple syntax highlighting, shallow depth of field, professional product photography, cinematic lighting, dark moody atmosphere, ultra sharp, --ar 16:9 --style raw --v 6.1
```

---

## Leistungen Sektion - Section Header Images

### Web Development Image
```
modern responsive web design mockup on multiple devices, smartphone tablet and desktop showing the same elegant website, dark theme with blue-purple gradient, floating screens with soft shadows, isometric perspective, clean professional design, glass morphism UI elements, --ar 3:2 --style raw --v 6.1
```

### Software Development Image
```
abstract representation of software architecture, clean geometric shapes forming a digital ecosystem, interconnected nodes and data flow, dark background with glowing blue-purple lines, professional tech illustration, minimalist modern design, depth and layers, --ar 3:2 --style raw --v 6.1
```

### Cloud & DevOps Image
```
abstract cloud infrastructure visualization, geometric server nodes connected by glowing data streams, dark navy background, blue and purple accent colors, clean modern tech illustration, professional DevOps concept, minimalist design with depth, --ar 3:2 --style raw --v 6.1
```

---

## Portfolio Section - Hingucker

### Portfolio Header Image
```
elegant portfolio showcase with floating modern website mockups, multiple screens in 3D space, dark background with subtle blue-purple gradient, professional presentation, depth of field, clean minimalist design, glass effects, soft shadows, --ar 21:9 --style raw --v 6.1
```

### Alternative: Code to Design Transformation
```
split composition showing code transforming into beautiful user interface, left side terminal with colorful syntax, right side elegant modern web design, dark theme, blue-purple gradient lighting, professional tech visualization, cinematic quality, --ar 16:9 --style raw --v 6.1
```

---

## Über Uns Section - Team/Office Vibe

### Modern Office Atmosphere
```
modern minimalist developer office space, sleek workstations with multiple monitors showing code, natural light through large windows, plants and clean interior design, professional tech company aesthetic, warm ambient lighting, architectural photography, --ar 16:9 --style raw --v 6.1
```

### Abstract Team Collaboration
```
abstract visualization of remote team collaboration, glowing connection lines between geometric nodes, world map in background, dark navy with blue-purple accents, modern tech illustration, professional business concept, clean minimal design, --ar 16:9 --style raw --v 6.1
```

---

## Tech Excellence Section - Hingucker

### Tech Stack Visualization
```
abstract 3D visualization of modern tech stack layers, floating geometric platforms with glowing edges, React Next.js TypeScript logos subtly integrated, dark background, blue-purple gradient lighting, professional software architecture concept, isometric view, clean design, --ar 16:9 --style raw --v 6.1
```

### Performance Metrics
```
elegant dashboard showing performance metrics and analytics, clean modern UI design, glowing data visualizations and charts, dark theme with blue-purple accents, professional software monitoring concept, depth of field, cinematic lighting, --ar 16:9 --style raw --v 6.1
```

---

## Kontakt Section - Background Image (Optional)

### Abstract Contact Concept
```
abstract geometric pattern with subtle communication symbols, clean minimal design, dark navy background with soft blue-purple gradient, professional business communication concept, elegant and understated, modern tech aesthetic, --ar 21:9 --style raw --v 6.1
```

---

## Allgemeine Style-Richtlinien für alle Prompts:

**Farben:**
- Dark navy/black backgrounds (#0A0F1E, #0F1419)
- Primary: Electric Blue (#0066FF)
- Secondary: Purple accents (#7C3AED)
- Avoid: Bright greens, reds, yellows

**Style:**
- Minimalist, clean, professional
- Photorealistic für Hardware/Workspaces
- Abstract/illustrative für Konzepte
- Glass morphism, soft shadows, depth

**Aspect Ratios:**
- Hero: 16:9 (1920x1080)
- Sections: 21:9 (2560x1080) oder 3:2
- Mobile: Crop to 4:3 oder 1:1 falls nötig

---

## Empfohlene Reihenfolge:

1. **PRIORITÄT 1: Hero Section**
   - Video: Prompt 1 (Code Animation) ODER
   - Static: Developer Workspace

2. **PRIORITÄT 2: Portfolio Section**
   - Portfolio Header Image (floating mockups)

3. **PRIORITÄT 3: Leistungen Headers**
   - Web Development, Software Development, Cloud Images

4. **OPTIONAL: Tech Excellence**
   - Tech Stack Visualization als eye-catcher

---

## Midjourney Settings:

```
--v 6.1 (neueste Version für beste Qualität)
--style raw (photorealistischer, weniger künstlerisch)
--ar 16:9 (Aspect Ratio für Hero/Sections)
--q 2 (höchste Qualität, mehr Credits aber besser)
```

## Nach der Generierung:

1. **Optimierung:**
   - TinyPNG.com für Kompression
   - Convert to WebP format
   - Generate multiple sizes (1920w, 1280w, 768w)

2. **Next.js Integration:**
   ```typescript
   <Image
     src="/images/hero-workspace.webp"
     alt="Modern developer workspace"
     width={1920}
     height={1080}
     priority
     quality={90}
   />
   ```

3. **Performance Check:**
   - Ziel: < 500KB pro Bild
   - Lazy loading für alles außer Hero
   - WebP mit JPEG Fallback

---

**Erstellt für:** Maxflow Software (maxflow-software.de)
**Datum:** 2025-12-04
**Midjourney Version:** v6.1
