import { Metadata } from "next";
import { Shield, Lock, Eye, FileText, Mail, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Maxflow Software",
  description: "Datenschutzerklärung gemäß DSGVO. Informationen zur Verarbeitung personenbezogener Daten auf maxflow-software.de",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">DSGVO-konform</span>
            </div>
            <h1 className="mb-6">Datenschutzerklärung</h1>
            <p className="text-xl text-muted-foreground">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung
              informiert Sie über die Verarbeitung Ihrer Daten auf unserer Website.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="prose prose-slate max-w-none">

            {/* 1. Datenschutz auf einen Blick */}
            <div className="mb-12 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0 mb-2">1. Datenschutz auf einen Blick</h2>
                  <p className="text-muted-foreground mb-0">Allgemeine Hinweise</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-3">Wer ist verantwortlich?</h3>
              <p className="text-muted-foreground mb-4">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br/>
                <strong>Maxflow Software</strong><br/>
                E-Mail: office@maxflow-software.de
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Wie erfassen wir Ihre Daten?</h3>
              <p className="text-muted-foreground mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. über unser Kontaktformular).
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z.B. technische Daten wie Browser, Betriebssystem).
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Wofür nutzen wir Ihre Daten?</h3>
              <p className="text-muted-foreground mb-0">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                Andere Daten (z.B. aus dem Kontaktformular) dienen zur Bearbeitung Ihrer Anfragen.
              </p>
            </div>

            {/* 2. Hosting */}
            <div className="mb-12 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0 mb-2">2. Hosting</h2>
                  <p className="text-muted-foreground mb-0">Vercel Inc.</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                Diese Website wird bei Vercel Inc. gehostet. Der Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
              </p>

              <p className="text-muted-foreground mb-4">
                Vercel verarbeitet Daten in unserem Auftrag (sog. Auftragsverarbeiter gemäß Art. 28 DSGVO).
                Beim Besuch dieser Website werden folgende Daten erfasst:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>Übertragene Datenmenge</li>
                <li>Browser und Betriebssystem</li>
              </ul>

              <p className="text-muted-foreground mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer und effizienter Bereitstellung der Website).
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Datenübermittlung in die USA</h3>
              <p className="text-muted-foreground mb-4">
                Vercel ist ein US-amerikanischer Anbieter. Die Datenverarbeitung kann daher auch auf Servern in den USA stattfinden.
                Die Datenübermittlung erfolgt auf Grundlage der <strong>EU-Standardvertragsklauseln (SCC)</strong> gemäß Art. 46 DSGVO
                sowie des <strong>EU-US Data Privacy Framework</strong>.
              </p>

              <p className="text-muted-foreground mb-4">
                <strong>Auftragsverarbeitung:</strong> Wir haben einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO mit Vercel abgeschlossen.
                Vercel verarbeitet Daten ausschließlich nach unserer Weisung und ist vertraglich verpflichtet, angemessene technische und organisatorische
                Maßnahmen zum Schutz Ihrer Daten zu treffen.
              </p>

              <p className="text-muted-foreground mb-0">
                Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>

            {/* 3. Kontaktformular */}
            <div className="mb-12 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0 mb-2">3. Kontaktformular & E-Mail-Versand</h2>
                  <p className="text-muted-foreground mb-0">Resend Inc.</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-3">Datenverarbeitung beim Kontaktformular</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
                Anschlussfragen bei uns gespeichert.
              </p>

              <p className="text-muted-foreground mb-4">
                <strong>Folgende Daten werden erfasst:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Betreff und Nachricht</li>
                <li>Zeitpunkt der Anfrage</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-3">E-Mail-Versand via Resend</h3>
              <p className="text-muted-foreground mb-4">
                Für den Versand von E-Mails nutzen wir den Dienst Resend Inc., 340 S Lemon Ave #3869, Walnut, CA 91789, USA.
                Die über das Kontaktformular eingegebenen Daten werden über Resend an uns weitergeleitet.
              </p>

              <p className="text-muted-foreground mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Absenden des Formulars) und Art. 6 Abs. 1 lit. b DSGVO
                (Verarbeitung zur Durchführung vorvertraglicher Maßnahmen).
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Datenübermittlung in die USA</h3>
              <p className="text-muted-foreground mb-4">
                Resend ist ein US-amerikanischer Anbieter. Die Datenverarbeitung kann daher auch auf Servern in den USA stattfinden.
                Die Datenübermittlung erfolgt auf Grundlage der <strong>EU-Standardvertragsklauseln (SCC)</strong> gemäß Art. 46 DSGVO.
              </p>

              <p className="text-muted-foreground mb-4">
                <strong>Auftragsverarbeitung:</strong> Wir haben einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO mit Resend abgeschlossen.
                Resend verarbeitet Ihre E-Mail-Daten ausschließlich zum Zweck der Übermittlung Ihrer Anfrage an uns und speichert diese nicht dauerhaft.
              </p>

              <p className="text-muted-foreground mb-4">
                <strong>Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald die Bearbeitung Ihrer Anfrage abgeschlossen ist
                und keine gesetzlichen Aufbewahrungspflichten bestehen. Dies erfolgt in der Regel nach spätestens 6 Monaten,
                sofern keine Geschäftsbeziehung zustande kommt.
              </p>

              <p className="text-muted-foreground mb-0">
                Weitere Informationen:{" "}
                <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://resend.com/legal/privacy-policy
                </a>
              </p>
            </div>

            {/* 4. Spam-Schutz */}
            <div className="mb-12 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0 mb-2">4. Spam-Schutz</h2>
                  <p className="text-muted-foreground mb-0">Honeypot & Rate Limiting</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                Zum Schutz vor automatisierten Spam-Anfragen setzen wir folgende Maßnahmen ein:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                <li><strong>Honeypot-Feld:</strong> Unsichtbares Formularfeld zur Bot-Erkennung</li>
                <li><strong>Rate Limiting:</strong> Begrenzung der Anfragen pro IP-Adresse (max. 5 pro Stunde)</li>
                <li><strong>Vercel Bot Protection:</strong> Automatische Bot-Erkennung durch Hosting-Provider</li>
              </ul>

              <p className="text-muted-foreground mb-0">
                Diese Maßnahmen dienen ausschließlich dem Spam-Schutz und beeinträchtigen normale Nutzer nicht.
              </p>
            </div>

            {/* 5. Ihre Rechte */}
            <div className="mb-12 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0 mb-2">5. Ihre Rechte</h2>
                  <p className="text-muted-foreground mb-0">DSGVO Betroffenenrechte</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                Sie haben nach der DSGVO folgende Rechte:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten
                  personenbezogenen Daten zu verlangen.</li>
                <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung unrichtiger Daten zu verlangen.</li>
                <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer Daten zu verlangen,
                  sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der
                  Verarbeitung Ihrer Daten zu verlangen.</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten,
                  gängigen Format zu erhalten.</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</li>
                <li><strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Wenn die Verarbeitung auf Ihrer Einwilligung beruht,
                  können Sie diese jederzeit widerrufen.</li>
              </ul>

              <p className="text-muted-foreground mb-0">
                <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              </p>
            </div>

            {/* 6. Datensicherheit */}
            <div className="mb-12 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0 mb-2">6. Datensicherheit</h2>
                  <p className="text-muted-foreground mb-0">SSL/TLS-Verschlüsselung</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
                von "http://" auf "https://" wechselt und an dem Schloss-Symbol in der Browserzeile.
              </p>

              <p className="text-muted-foreground mb-0">
                Wenn die SSL/TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </div>

            {/* Kontakt */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Fragen zum Datenschutz?</h2>
              <p className="text-muted-foreground mb-4">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften,
                Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <div className="space-y-2">
                <p className="font-medium">Maxflow Software</p>
                <p className="text-muted-foreground">
                  E-Mail:{" "}
                  <a href="mailto:office@maxflow-software.de" className="text-primary hover:underline">
                    office@maxflow-software.de
                  </a>
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Stand: {new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
