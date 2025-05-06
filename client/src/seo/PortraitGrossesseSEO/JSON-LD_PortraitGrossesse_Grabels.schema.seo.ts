import DataSEORoot from "../DataSEORoot.seo";
import AvisClientGrossesseControllerData from "../../components/GrossesseRoot/AvisClientGrossesseControllerData";
import generateAverageRatingSEO from "../../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";
import DataSEO_PortraitGrossesse from "./DataSEO_PortraitGrossesse.seo";

const JSON_LD_PortraitGrossesse_Grabels_Schema_SEO = JSON.stringify({
    "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
    "@type": DataSEORoot["@type"], /* (Obligatoire) Type de la donnée */
    "@id": DataSEO_PortraitGrossesse.id,
    "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
    "image": DataSEO_PortraitGrossesse.img, /* (Obligatoire) URL de l'image de l'entreprise */
    "description": DataSEO_PortraitGrossesse.description,
    "url": DataSEO_PortraitGrossesse.url, /* (Obligatoire) URL de la page */
    "telephone": DataSEORoot.telephone, /* (Obligatoire) Numéro de téléphone de l'entreprise */
    "email": DataSEORoot.email, /* (Obligatoire) Adresse email de l'entreprise */
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13 Allée des Platanes",
      "addressLocality": "Grabels",
      "postalCode": "34790",
      "addressCountry": "FR"
    }, /* (Obligatoire) Adresse de l'entreprise */
    "priceRange": "€€",
    "openingHours": DataSEORoot.openingHours, /* Horaires d'ouverture de l'entreprise */
    "sameAs": DataSEORoot.sameAs, /* Liens vers les réseaux sociaux de l'entreprise */
    "aggregateRating": generateAverageRatingSEO(AvisClientGrossesseControllerData), /* Met à disposition la note moyenne dans le SEO avec les bonnes clés */
    "review": generateReviewArraySEO(AvisClientGrossesseControllerData), /* Met à disposition les avis clients dans le SEO avec les bonnes clés */
});

export default JSON_LD_PortraitGrossesse_Grabels_Schema_SEO;
