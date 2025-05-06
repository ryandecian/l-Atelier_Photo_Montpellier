import DataSEORoot from "../DataSEORoot.seo";
import AvisClientGrossesseControllerData from "../../components/GrossesseRoot/AvisClientGrossesseControllerData";
import GenerateAverageRatingSEO from "../../utils/geenerateAverageRatingSEO.utils";
import GenerateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";

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
    "aggregateRating": GenerateAverageRatingSEO(AvisClientGrossesseControllerData), // Note moyenne des avis clients et le nombre d'avis
    "review": GenerateReviewArraySEO(AvisClientGrossesseControllerData), // Met a disposition les avis clients dans le SEO avec les bonnes clés
});

export default JSON_LD_PortraitGrossesse_Grabels_Schema_SEO;
