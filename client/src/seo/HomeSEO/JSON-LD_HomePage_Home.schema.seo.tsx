import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Homes from "./DataSEO_Home.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

import AvisClientHomeControllerData from "../../components/HomeRoot/AvisClientHomeControllerData";
import generateAverageRatingSEO from "../../utils/generateAverageRatingSEO.utils";
import generateReviewArraySEO from "../../utils/generateReviewArraySEO.utils";


function JSON_LD_HomePage_Home_Schema_SEO() : string {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_Home: DataSEOTargetOneType = DataSEO_Homes(); /* Récupération des données SEO */

    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].HomePage, /* (Obligatoire) Type de la donnée */
        "@id": DataSEO_Home.id_Service,
        "name": DataSEORoot.name, /* (Obligatoire) Nom de l'entreprise */
        "url": DataSEO_Home.url, /* (Obligatoire) URL de la page */
        "about": {
            "@type": DataSEORoot["@type"].Local,
            "name": DataSEORoot.name,
        },
        "image": DataSEO_Home.img_JSON_LD, /* (Obligatoire) URL de l'image de l'entreprise */
        "description": DataSEO_Home.description,
        "provider": {
            "@id": DataSEORoot.id_LocalBusiness /* (Obligatoire) Référence à l'ID de l'Entreprise */
        },
        "publisher": {
            "@type": "Organization",
            "name": DataSEORoot.name,
            "logo": {
            "@type": "ImageObject",
            "url": DataSEORoot.logo,
            "width": 200,
            "height": 200
            },
        },
        // ⚠️ A décommanter lors du passage de site vitrine en e-commerce si achat ou mise au panier possible sur cette page
        // "availableChannel": {
        // "@type": "ServiceChannel",
        // "serviceUrl": DataSEO_Home.url
        // },
        "aggregateRating": generateAverageRatingSEO(AvisClientHomeControllerData),
        "review": generateReviewArraySEO(AvisClientHomeControllerData)
    });

    return (
        JSON_LD
    )
}

export default JSON_LD_HomePage_Home_Schema_SEO;
