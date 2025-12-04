export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maxflow Software",
    url: "https://maxflow-software.de",
    logo: "https://maxflow-software.de/logo.png",
    description:
      "Maßgeschneiderte Software-Entwicklung und moderne Websites. Individuelle digitale Lösungen für Ihr Business.",
    email: "office@maxflow-software.de",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
    sameAs: [
      // Social Media Links hier hinzufügen wenn vorhanden
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://maxflow-software.de",
    name: "Maxflow Software",
    image: "https://maxflow-software.de/logo.png",
    description:
      "Professionelle Software-Entwicklung und Website-Erstellung. Wir entwickeln maßgeschneiderte digitale Lösungen.",
    url: "https://maxflow-software.de",
    telephone: "", // Telefonnummer falls vorhanden
    email: "office@maxflow-software.de",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      // latitude und longitude falls gewünscht
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "€€",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maxflow Software",
    url: "https://maxflow-software.de",
    description:
      "Maßgeschneiderte Programme und moderne Websites – entwickelt mit neuesten Technologien",
    publisher: {
      "@type": "Organization",
      name: "Maxflow Software",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development",
    provider: {
      "@type": "Organization",
      name: "Maxflow Software",
      url: "https://maxflow-software.de",
    },
    areaServed: {
      "@type": "Country",
      name: "Germany",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maßgeschneiderte Software-Entwicklung",
            description:
              "Individuelle Softwarelösungen für Ihre Geschäftsprozesse",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website-Entwicklung",
            description:
              "Moderne, responsive Websites mit perfekter Performance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Beratung & Konzeption",
            description: "Strategische Beratung für digitale Projekte",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
