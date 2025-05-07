import DataSEORoot from "../DataSEORoot.seo";
import AvisClientGrossesseControllerData from "../../components/GrossesseRoot/AvisClientGrossesseControllerData";
import generateAverageRatingSEO from "../../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";
import DataSEO_PortraitGrossesse from "./DataSEO_PortraitGrossesse.seo";

const JSON_LD_Service_PortraitGrossesse_Schema_SEO = JSON.stringify({
    "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
    "@type": DataSEORoot["@type"].Service, /* (Obligatoire) Type de la donnée */
    "@id": DataSEO_PortraitGrossesse.id_Service,
    "serviceType": "Photographie grossesse",
    "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
    "image": DataSEO_PortraitGrossesse.img, /* (Obligatoire) URL de l'image de l'entreprise */
    "description": DataSEO_PortraitGrossesse.description,
    "provider": {
        "@id": DataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
    },
    "areaServed": DataSEORoot.areaServed, /* Zone géographique desservie par le service */
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": DataSEO_PortraitGrossesse.url
  },
  "aggregateRating": generateAverageRatingSEO(AvisClientGrossesseControllerData),
  "review": generateReviewArraySEO(AvisClientGrossesseControllerData)
});

export default JSON_LD_Service_PortraitGrossesse_Schema_SEO;
