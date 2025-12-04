# Geschäftskonto für Maxflow Software

## 🏦 Entscheidung: N26 Business Standard

**Datum:** 2025-12-04
**Gewählt:** N26 Business Standard (0€/Monat - dauerhaft kostenlos)

---

## 💰 Kosten

- **Kontoführung:** 0€/Monat (für immer)
- **Mastercard Debit:** 0€
- **Transaktionen:** Unbegrenzt & kostenlos
- **Keine versteckten Gebühren**

---

## ✅ Vorteile für Maxflow Software

### Für das Business:
- ✅ Dauerhaft kostenlos (keine Mindestgebühr)
- ✅ Professionelles Geschäftskonto für Rechnungen
- ✅ Mastercard für Geschäftsausgaben
- ✅ Echtzeit-Benachrichtigungen bei Zahlungen
- ✅ Unterkonten (Spaces) für Steuerrücklagen (30% beiseite legen)
- ✅ CSV/Excel Export für Buchhaltung
- ✅ Moderne App mit bestem UX

### Für die Steuersoftware-Entwicklung:
- ✅ **PSD2 API-Zugang** (gesetzlich garantiert)
- ✅ Integration über **FinAPI** oder **Tink**
- ✅ Perfekte Testumgebung für eigene Software
- ✅ Echtzeit-Transaktionsdaten über API
- ✅ Später: Kunden können N26 in meiner Software nutzen

---

## 🔧 Technische Integration

### API-Zugang via FinAPI

N26 ist vollständig PSD2-konform und über Banking-Aggregatoren nutzbar:

```typescript
// FinAPI Integration (empfohlen)
import { FinAPIClient } from '@finapi/nodejs-client';

const client = new FinAPIClient({
  clientId: process.env.FINAPI_CLIENT_ID,
  clientSecret: process.env.FINAPI_CLIENT_SECRET,
  environment: 'production'
});

// N26-Konto verbinden
const connection = await client.connectBank({
  bankId: 'n26',
  userId: currentUser.id
});

// Transaktionen automatisch abrufen
const transactions = await client.getTransactions({
  accountId: connection.accounts[0].id,
  minDate: '2025-01-01',
  maxDate: '2025-12-31'
});

// In Steuersoftware importieren
transactions.forEach(tx => {
  // Automatische Kategorisierung
  categorizeTax(tx);

  // Steuerberechnung
  if (tx.amount > 0) {
    // Einnahme → Einkommensteuer
    calculateIncomeTax(tx);
  } else {
    // Ausgabe → Betriebsausgabe
    calculateDeduction(tx);
  }
});
```

### API-Features:
- ✅ Kontostand abrufen (Echtzeit)
- ✅ Transaktionen abrufen (Historie + Live)
- ✅ Kategorien und Metadaten
- ✅ Webhooks für neue Transaktionen (via FinAPI)
- ✅ CSV-Export (fallback wenn API nicht verfügbar)

---

## 📋 Was benötigt wird für Kontoeröffnung

1. **Gewerbeanmeldung** ✅
   - Maxflow Software
   - Gewerbepark 35, 83670 Bad Heilbrunn

2. **Personalausweis**
   - Für Video-Ident-Verfahren

3. **Steuernummer**
   - Optional bei Kontoeröffnung
   - Kann nachgereicht werden
   - Sollte beim Finanzamt beantragt werden (Fragebogen zur steuerlichen Erfassung)

4. **Smartphone**
   - Für Video-Ident (5 Minuten)
   - Für N26-App

---

## 🚀 Kontoeröffnung Schritt-für-Schritt

1. **Website:** https://n26.com/de-de/business
2. **Klicke:** "Geschäftskonto eröffnen"
3. **Wähle:** "Business Standard" (0€)
4. **Angaben eingeben:**
   - Name: Maximilian Fegg
   - Firmenname: Maxflow Software
   - Adresse: Gewerbepark 35, 83670 Bad Heilbrunn, Deutschland
   - Branche: IT-Dienstleistungen / Software-Entwicklung
   - Rechtsform: Einzelunternehmen
   - **Kleinunternehmerregelung § 19 UStG:** Ja ✅
5. **Gewerbeanmeldung hochladen**
6. **Video-Ident:** Ausweis per Video verifizieren (5 Min)
7. **Fertig:** Konto ist in 24-48h aktiviert, Karte kommt per Post

---

## 💻 Integration in Steuersoftware - Roadmap

### Phase 1: Entwicklung (0€ Kosten)
**Jetzt - 6 Monate**

- [ ] N26 Business Standard Konto eröffnen
- [ ] FinAPI Developer-Account erstellen (kostenlos)
  - Website: https://finapi.io
  - Sandbox-Zugang für Entwicklung
- [ ] N26 mit FinAPI in Sandbox verbinden
- [ ] Test-Transaktionen abrufen
- [ ] Integration in Steuersoftware entwickeln:
  - Transaktionen automatisch importieren
  - Kategorisierung (Einnahmen/Ausgaben)
  - Steuerberechnung (Einkommensteuer-Rücklagen)
  - Betriebsausgaben-Tracking
  - Visualisierung (Dashboard)

**Kosten Phase 1:** 0€/Monat

---

### Phase 2: Production (29€ Kosten)
**Ab ersten zahlenden Kunden**

- [ ] FinAPI Production-Zugang aktivieren (29€/Monat Flatrate)
- [ ] Eigenes N26-Konto live anbinden
- [ ] Testnutzer einladen (Beta)
- [ ] User können ihre Banken verbinden (nicht nur N26!)
  - Über FinAPI: 4000+ Banken verfügbar
  - Kontist ✅
  - Sparkasse ✅
  - Volksbank ✅
  - Commerzbank ✅
  - Alle deutschen Banken ✅

**Kosten Phase 2:** 29€/Monat (FinAPI Flatrate)

---

### Phase 3: Skalierung (100+ Nutzer)
**Wenn Steuersoftware erfolgreich**

**Option A:** FinAPI behalten (29€/Monat Flatrate)
- Gut bei vielen Nutzern
- 0,10€ pro Transaction wäre teurer

**Option B:** Tink nutzen (kostenlos bis 100 User, dann Pay-as-you-go)
- Alternative zu FinAPI
- International verfügbar

**Option C:** Eigene PSD2-Integration
- Direkter Zugang zu Banken
- Komplett kostenlos
- Aber: Viel Entwicklungsaufwand

---

## 📊 Finanzplanung für Steuersoftware-Projekt

### Entwicklungsphase (Monat 1-6):
- N26 Business: **0€**
- FinAPI Sandbox: **0€**
- **TOTAL: 0€/Monat**

### Launch & erste Kunden (Monat 7-12):
- N26 Business: **0€**
- FinAPI Production: **29€/Monat**
- **TOTAL: 29€/Monat**

### Ab 10 zahlenden Kunden (á 9€/Monat = 90€ Umsatz):
- N26 Business: **0€**
- FinAPI: **29€/Monat**
- **Gewinn: 61€/Monat**

### Ab 50 Kunden (á 9€/Monat = 450€ Umsatz):
- N26 Business: **0€**
- FinAPI: **29€/Monat**
- **Gewinn: 421€/Monat**

---

## 🔐 Sicherheit & Datenschutz

### PSD2-Konformität:
- ✅ EU-reguliert und sicher
- ✅ OAuth 2.0 Authentifizierung
- ✅ Keine Speicherung von Bankzugangsdaten
- ✅ User authentifiziert sich direkt bei seiner Bank
- ✅ Nur Lesezugriff auf Transaktionen (keine Überweisungen)

### DSGVO-konform:
- ✅ FinAPI ist deutscher Anbieter (Frankfurt)
- ✅ Daten bleiben in Deutschland/EU
- ✅ Auftragsverarbeitungsvertrag (AVV) verfügbar
- ✅ User muss explizit zustimmen

### In Datenschutzerklärung aufnehmen:
```markdown
## Bankdaten-Integration (optional)

Sie können Ihr Geschäftskonto mit unserer Software verbinden,
um Transaktionen automatisch zu importieren.

**Verwendete Dienste:**
- **FinAPI** (finleap connect GmbH, Frankfurt am Main)
- Zweck: Sicherer Abruf von Bankdaten über PSD2-Schnittstelle
- Datenverarbeitung: EU (Deutschland)
- Auftragsverarbeitungsvertrag: Vorhanden
- Speicherdauer: Transaktionsdaten bis zum Widerruf

Sie authentifizieren sich direkt bei Ihrer Bank.
Wir speichern keine Bankzugangsdaten.
```

---

## ⚡ Vorteile gegenüber manuellem CSV-Import

### Aktuell (CSV-Import):
- ⏱️ Manueller Export bei Bank
- ⏱️ Manueller Upload in Software
- ⏱️ Zeitaufwand: 5-10 Min pro Monat
- ❌ Fehleranfällig (vergessene Monate)
- ❌ Keine Echtzeit-Daten

### Mit API-Integration:
- ✅ Vollautomatisch
- ✅ Echtzeit-Synchronisation
- ✅ Keine manuelle Arbeit
- ✅ Immer aktuell
- ✅ Webhooks: Benachrichtigung bei neuer Transaktion
- ✅ Bessere User Experience

---

## 🎯 Nächste Schritte

### Sofort:
- [ ] N26 Business Standard Konto eröffnen
  - Link: https://n26.com/de-de/business
  - Dauer: 10 Minuten
  - Gewerbeanmeldung bereithalten

### Diese Woche:
- [ ] Steuernummer beim Finanzamt beantragen
  - Fragebogen zur steuerlichen Erfassung (ELSTER)
  - Kleinunternehmerregelung § 19 UStG angeben
  - Dauert 2-4 Wochen per Post

### Nächste Woche:
- [ ] FinAPI Developer-Account erstellen
- [ ] Sandbox-Integration testen
- [ ] Erste API-Calls in Steuersoftware implementieren

---

## 📚 Dokumentation & Links

### N26:
- Website: https://n26.com/de-de/business
- Preise: https://n26.com/de-de/business-prices
- FAQ: https://n26.com/de-de/business-faq

### FinAPI:
- Website: https://finapi.io
- Dokumentation: https://docs.finapi.io
- Preise: https://finapi.io/preise
- Developer Portal: https://dev.finapi.io

### PSD2 / Open Banking:
- EU PSD2 Gesetz: https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en
- Was ist PSD2: https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/psd2

---

## ✅ Entscheidungs-Zusammenfassung

**Warum N26 Business Standard?**
1. ✅ **0€ für immer** - keine laufenden Kosten
2. ✅ **Perfekt für Steuersoftware-Entwicklung** - PSD2 API
3. ✅ **Professionell** - echtes Geschäftskonto
4. ✅ **Moderne App** - beste User Experience
5. ✅ **Skalierbar** - später alle Banken über FinAPI

**Alternativen ausgeschlossen:**
- ❌ Kontist Free (0€): Gute API, aber N26 ist moderner
- ❌ Kontist Premium (9€): Nicht nötig, baue eigene Steuersoftware
- ❌ Holvi (12€): Zu teuer für Features die ich nicht brauche
- ❌ Sparkasse (15€): Altmodisch, schlechte API

**Finale Entscheidung:** N26 Business Standard ✅

---

**Erstellt:** 2025-12-04
**Nächste Review:** Nach Kontoeröffnung
**Status:** 🟡 Geplant (Konto noch nicht eröffnet)
