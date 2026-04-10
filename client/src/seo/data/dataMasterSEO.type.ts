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
    "identifier": {
        "@type": "PropertyValue",
        "propertyID": string,
        "value": string
    },
    "logo": {
        "@type": "ImageObject",
        "url": string,
        "width": number,
        "height": number
    };
    "name": string;
}

export type { dataMasterSEO_Type };
