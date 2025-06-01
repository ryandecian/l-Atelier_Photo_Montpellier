type DataSEOTargetOneType = {
    title: string;
    autor: string;
    description: string;
    url: string;
    position: number;
    name_Breadcrumb: string; /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
    name_Service?: string; /* Nom du service, utilisé dans le JSON-LD Service */
    name_ImageGalery?: string; /* Nom de la galerie photo, utilisé dans le JSON-LD ImageGallery */
    name_Collection?: string; /* Nom de la collection, utilisé dans le JSON-LD Collection */
    name_ContactPage?: string; /* Nom de la page de contact, utilisé dans le JSON-LD ContactPage */
    twitterUrlImg?: string; /* fallback */
    keywords: {
        1: string; /* 1 mot clé */
        2: string; /* 2 mots clés */
        3: string; /* 3 mots clés */
        5: string; /* 5 mots clés */
        6: string; /* 6 mots clés */
        7: string; /* 7 mots clés */
        8: string; /* 8 mots clés */
        9?: string; /* 9 mots clés (optionnel) */
        10?: string; /* 10 mots clés (optionnel) */
        11?: string; /* 11 mots clés (optionnel) */
        13?: string; /* 13 mots clés (optionnel) */
        14?: string; /* 14 mots clés (optionnel) */
        15?: string; /* 15 mots clés (optionnel) */
    };
    type: {
        website: string;
        article: string;
        video: string;
        music: string;
        profile: string;
    };
    img_JSON_LD: string;
    img_Helmet: string;
    id_Service: string; /* @id SEO-friendly, correspond à l'URL de la page + mots clés */
    serviceType: string; /* Type de service */
}

export default DataSEOTargetOneType;
