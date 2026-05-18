/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../data/dataMasterSEO.data.seo";

function generateLocalBusiness_script_SEO(): string {
    const json_ld = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "LocalBusiness", /* (Obligatoire) Type de JSON-LD */
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

/**
 * ### Documentation : Script JSON-LD pour le LocalBusiness de Google. 
 * - Doit être injecté sur toutes les pages du site.
 * - Est stocké dans une **const** afin de ne pas être recalculé à chaque appel.
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {string} Retourne une string grâce à la fonction JSON.stringify, necessaire pour l'injection dans une page.
 */

export const localBusiness_script_SEO = generateLocalBusiness_script_SEO();
