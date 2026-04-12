type dataMasterSEO_Type = {
    "@context": string; /* URL de Google schéma */
    "@type": {          /* (Obligatoire) Type de JSON-LD */
        "LocalBusiness": "LocalBusiness",
        "BreadcrumbList": "BreadcrumbList",
        "Service": "Service",
        "ContactPage": "ContactPage",
        "HomePage": "HomePage",
        "CollectionPage": "CollectionPage",
        "ImageGallery": "ImageGallery",
        "ItemList": "ItemList",
        "Person": "Person",
        "Blog": "Blog",
        "BlogPosting": "BlogPosting",
        "WebPage": "WebPage",
        "TermsOfService": "TermsOfService",
        "VideoObject": "VideoObject"
    },
    "id_LocalBusiness": string; /* URL du front avec un ID unique pour le LocalBusiness */
    "identifier": {             /* Identifiant de l'entreprise, ici le SIRET */
        "@type": "PropertyValue",
        "propertyID": string,
        "value": string
    },
    "logo": {                   /* URL du logo de l'entreprise */
        "@type": "ImageObject",
        "url": string,
        "width": number,
        "height": number
    };
    "name": string;      /* Nom de l'entreprise */
    "image"?: string;    /* Lien URL public de l'image de l'entreprise (Dynamique) */
    "url": string;       /* URL de la page d'accueil de l'entreprise (Dynamique) */
    "telephone": string; /* Numéro de téléphone de l'entreprise (Manuel) */
    "email": string;     /* Adresse email de l'entreprise (Dynamique) */
    "address": {         /* (Obligatoire) Adresse de l'entreprise */
        "@type": "PostalAddress",
        "streetAddress": string,
        "addressLocality": string,
        "postalCode": string,
        "addressCountry": string
    };
    "priceRange"?: string;    /* (Recommandé) Gamme de prix de l'entreprise */
    "openingHours": string[]; /* Horaires d'ouverture de l'entreprise */
    "sameAs": string[];       /* Liste et liens vers les réseaux sociaux de l'entreprise */
    "aggregateRating": {      /* Note moyenne et nombre d'avis clients */
        "@type": string;
        "ratingValue": string;
        "reviewCount": string;
    } | null;
    "review": { /* Tableau des avis clients spécifique à Google (Max 5) */
        "@type": string;
        "author": {
            "@type": string;
            "name": string; /* Nom de l'auteur de l'avis */
        };
        "datePublished": string; /* Date de publication de l'avis de type string au format "DD/MM/YYYY" */
        "reviewBody": string; /* Contenu de l'avis */
        "reviewRating": {
            "@type": string;
            "ratingValue": string; /* Note de l'avis */
        };
    }[]
}

export type { dataMasterSEO_Type };
