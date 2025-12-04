import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/shared/StructuredData";
import { SkipToContent } from "@/components/shared/SkipToContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maxflow Software | Maßgeschneiderte Programme & Websites",
  description: "Individuelle Software-Entwicklung und moderne Websites. Ihr Partner für digitale Lösungen.",
  keywords: ["Software Entwicklung", "Website Entwicklung", "Maßgeschneiderte Software", "Web Development"],
  metadataBase: new URL('https://maxflow-software.de'),
  icons: {
    icon: '/favicon-from-logo.svg',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Maxflow Software | Maßgeschneiderte Programme & Websites',
    description: 'Individuelle Software-Entwicklung und moderne Websites. Ihr Partner für digitale Lösungen.',
    url: 'https://maxflow-software.de',
    siteName: 'Maxflow Software',
    images: ['/og-image.png'],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maxflow Software | Maßgeschneiderte Programme & Websites',
    description: 'Individuelle Software-Entwicklung und moderne Websites.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SkipToContent />
        <Header />
        <main id="main-content" className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
