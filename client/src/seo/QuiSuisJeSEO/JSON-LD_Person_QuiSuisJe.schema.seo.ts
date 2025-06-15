import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_QuiSuisJes from "./DataSEO_QuiSuisJe.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

function JSON_LD_Service_QuiSuisJe_Schema_SEO() {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_QuiSuisJe: DataSEOTargetOneType = DataSEO_QuiSuisJes(); /* Récupération des données SEO de la page */
    
    const JSON_LD = JSON.stringify({
        "@context": DataSEORoot["@context"], /* (Obligatoire) Contexte de la donnée */
        "@type": DataSEORoot["@type"].Person, /* (Obligatoire) Type de la donnée */
        "name": DataSEO_QuiSuisJe.autor, /* (Obligatoire) Nom de la personne */
        "alternateName": "Photographe Anne SAUNIER",
        "description": DataSEO_QuiSuisJe.description, /* (Obligatoire) Description de la personne */
        "image": DataSEO_QuiSuisJe.img_JSON_LD, /* (Obligatoire) Lien URL de l'image */
        "jobTitle": "Photographe professionnelle",
        "gender": "Female",
        "birthPlace": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Boulogne-Billancourt",
                "addressCountry": "FR"
            }
        },
        "nationality": {
        "@type": "Country",
        "name": "France"
        },
        "worksFor": {
            "@type": "Organization",
            "name": "l'Atelier Photo Montpellier",
            "url": "https://www.nom-de-domaine.fr"
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Studio B612"
        },
        "knowsAbout": [
            "Portrait photo",
            "Photographie studio",
            "Photographie de mariage",
            "Éclairage au flash",
            "Post-traitement numérique",
            "Composition photographique"
        ],
        "sameAs": [
            "https://www.instagram.com/atelierphotomontpellier",
            "https://www.facebook.com/atelierphotomontpellier"
        ],
        "url": "https://www.nom-de-domaine.fr/qui-suis-je"
    })

    return (
        JSON_LD
    )
}

export default JSON_LD_Service_QuiSuisJe_Schema_SEO;
