type dataMasterSEO_Type = {
    "@context": string;
    "@type": {
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
    "id_LocalBusiness": string;
    "identifier": {
        "@type": "PropertyValue",
        "propertyID": string,
        "value": string
    }
}

export type { dataMasterSEO_Type };
