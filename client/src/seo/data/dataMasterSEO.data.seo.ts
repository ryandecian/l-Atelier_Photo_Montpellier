/* Import des composants Router */
import router from "../../router/router";

/* Import des Configs */
import { ENV } from "../../config/ENV.config";

/* Import des Types */
import { dataMasterSEO_Type } from "./dataMasterSEO.type";

function dataMasterSEO_data_SEO(): dataMasterSEO_Type {
    const dataMasterSEO: dataMasterSEO_Type = {
        "@context": "https://schema.org", /* URL de Google schéma */
        "@type": {                        /* (Obligatoire) Type de JSON-LD */
            LocalBusiness: "LocalBusiness",
            BreadcrumbList: "BreadcrumbList",
            Service: "Service",
            ContactPage: "ContactPage",
            HomePage: "HomePage",
            CollectionPage: "CollectionPage",
            ImageGallery: "ImageGallery",
            ItemList: "ItemList",
            Person: "Person",
            Blog: "Blog",
            BlogPosting: "BlogPosting",
            WebPage: "WebPage",
            TermsOfService: "TermsOfService",
            VideoObject: "VideoObject"
        },
        "id_LocalBusiness": `${ENV("VITE_DOMAIN_CLIENT")}#lapm`, /* URL du front avec un ID unique pour le LocalBusiness */
        "identifier": {
            "@type": "PropertyValue",
            "propertyID": "SIRET",
            "value": "80255882500021"
        },
        "logo": {
            "@type": "ImageObject",
            "url": `${ENV("VITE_DOMAIN_CLIENT")}/logo-LAPM-l-atelier-photo-montpellier.png`, /* Logo au format carré si possible, poids max 75 ko */
            "width": 200,
            "height": 200
        },
        "name": "L'Atelier Photo Montpellier", /* Nom de l'entreprise */
    };

    return (
        dataMasterSEO
    );
}

export { dataMasterSEO_data_SEO };
