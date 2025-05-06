const JSON_LD_PortraitGrossesse_Schema_SEO = JSON.stringify({
    "@context": "https://schema.org", // (Obligatoire) Contexte de la donnée
    "@type": "LocalBusiness", // (Obligatoire) LocalBusiness
    "name": "L'Atelier Photo Montpellier", // (Obligatoire) Nom de l'entreprise
    "image": SEO.img, // (Obligatoire) URL de l'image représentative de l'entreprise
    "description": SEO.description,
    "url": SEO.url, // (Obligatoire) URL de la page de l'entreprise
    "telephone": "+33 6 12 34 56 78", // (Obligatoire) Numéro de téléphone de l'entreprise
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 rue de la Photo",
      "addressLocality": "Montpellier",
      "postalCode": "34000",
      "addressCountry": "FR"
    }, // (Obligatoire) Adresse de l'entreprise
    "priceRange": "€€",
    "openingHours": "Mo-Fr 10:00-18:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "28"
    },
    "review": [
      {
        "@type": "Review",
        "author": "Julie M.",
        "datePublished": "2024-12-10",
        "reviewBody": "Une séance photo grossesse pleine de douceur et d’émotion.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  }
);

export default JSON_LD_PortraitGrossesse_Schema_SEO;
