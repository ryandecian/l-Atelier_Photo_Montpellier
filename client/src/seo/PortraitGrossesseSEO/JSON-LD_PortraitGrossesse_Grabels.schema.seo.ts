import DataSEORoot from "../DataSEORoot.seo";
import AvisClientGrossesseControllerData from "../../components/GrossesseRoot/AvisClientGrossesseControllerData";

// Calcule de la note moyenne à une décimale près
const NoteMoyenne = (
    AvisClientGrossesseControllerData.reduce((acc, avis) => acc + avis.note, 0)
    / AvisClientGrossesseControllerData.length
  ).toFixed(1);

const JSON_LD_PortraitGrossesse_Grabels_Schema_SEO = JSON.stringify({
    "@context": DataSEORoot["@context"], // (Obligatoire) Contexte de la donnée
    "@type": DataSEORoot["@type"], // (Obligatoire) LocalBusiness
    "name": DataSEORoot.name, // (Obligatoire) Nom de l'entreprise
    "image": SEO.img, // (Obligatoire) URL de l'image représentative de l'entreprise
    "description": SEO.description,
    "url": SEO.url, // (Obligatoire) URL de la page de l'entreprise
    "telephone": DataSEORoot.telephone, // (Obligatoire) Numéro de téléphone de l'entreprise
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13 Allée des Platanes",
      "addressLocality": "Grabels",
      "postalCode": "34790",
      "addressCountry": "FR"
    }, // (Obligatoire) Adresse de l'entreprise
    "priceRange": "€€",
    "openingHours": DataSEORoot.openingHours, // Heures d'ouverture de l'entreprise
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": NoteMoyenne, // Note moyenne du service de la page
      "reviewCount": AvisClientGrossesseControllerData.length.toString(),
    },
    "review": AvisClientGrossesseControllerData.map((avis) => ({
    "@type": "Review",
    "author": avis.nom,
    "datePublished": avis.date,
    "reviewBody": avis.commentaire,
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": avis.note.toString()
        }
    })),
});

export default JSON_LD_PortraitGrossesse_Grabels_Schema_SEO;
