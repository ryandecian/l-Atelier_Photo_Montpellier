/* Import des Components */

/* Import des Components de Data */
import { dataMasterSEO_data_SEO } from "../data/dataMasterSEO.data.seo";

/* Import des Types */
import { dataMasterSEO_Type } from "../data/dataMasterSEO.type";

/* Import des Utils */

function localBusiness_script_SEO(): string {
    const dataMasterSEO: dataMasterSEO_Type = dataMasterSEO_data_SEO(); /* Récupération des données SEO */

    const json_ld = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": dataMasterSEO["@type"].LocalBusiness, /* (Obligatoire) Type de JSON-LD */
        "@id": dataMasterSEO.id_LocalBusiness,  /* (Obligatoire) URL du front avec un ID unique pour le LocalBusiness */
        "identifier": dataMasterSEO.identifier, /* (Obligatoire) Identifiant de l'entreprise, ici le SIRET */
        "logo": dataMasterSEO.logo,    /* (Obligatoire) URL du logo de l'entreprise */
        "name": dataMasterSEO.name,    /* (Obligatoire) Nom de l'entreprise */
        "image": dataMasterSEO.image,  /* (Recommandé) URL de l'image de l'entreprise */
        "url": dataMasterSEO.url,      /* (Obligatoire) URL de la page */
        "telephone": dataMasterSEO.telephone, /* (Obligatoire) Numéro de téléphone de l'entreprise */
        "email": dataMasterSEO.email,  /* (Obligatoire) Adresse email de l'entreprise */
        "address": dataMasterSEO.address,       /* (Obligatoire) Adresse de l'entreprise */
        "priceRange": dataMasterSEO.priceRange, /* (Recommandé) Gamme de prix de l'entreprise */
        "openingHours": dataMasterSEO.openingHours,      /* Horaires d'ouverture de l'entreprise */
        "sameAs": dataMasterSEO.sameAs,                  /* Liste et liens vers les réseaux sociaux de l'entreprise */
        "aggregateRating": dataMasterSEO.aggregateRating, /* Note moyenne et nombre d'avis clients */
        "review": dataMasterSEO.review /* Tableau des avis clients spécifique à Google (Max 5) */
    });

    return (
        json_ld
    );
}

export { localBusiness_script_SEO };
