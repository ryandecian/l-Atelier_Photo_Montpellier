import DataSEORoot from "../DataSEORoot.seo";
import AvisClientGrossesseControllerData from "../../components/GrossesseRoot/AvisClientGrossesseControllerData";
import generateAverageRatingSEO from "../../utils/GenerateAverageRatingSEO.utils";
import generateReviewArraySEO from "../../utils/GenerateReviewArraySEO.utils";
import DataSEO_PortraitGrossesse from "./DataSEO_PortraitGrossesse.seo";

const JSON_LD_PortraitGrossesse_Grabels_Schema_SEO = JSON.stringify({
    "@context": DataSEORoot["@context"], // (Obligatoire) Contexte de la donnée
    "@type": DataSEORoot["@type"], // (Obligatoire) LocalBusiness
    "name": DataSEORoot.name, // (Obligatoire) Nom de l'entreprise
    "image": DataSEO_PortraitGrossesse.img, // (Obligatoire) URL de l'image représentative de l'entreprise
    "description": DataSEO_PortraitGrossesse.description,
    "url": DataSEO_PortraitGrossesse.url, // (Obligatoire) URL de la page de l'entreprise
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
    "aggregateRating": generateAverageRatingSEO(AvisClientGrossesseControllerData), // Note moyenne des avis clients et le nombre d'avis
    "review": generateReviewArraySEO(AvisClientGrossesseControllerData), // Met a disposition les avis clients dans le SEO avec les bonnes clés
});

export default JSON_LD_PortraitGrossesse_Grabels_Schema_SEO;
