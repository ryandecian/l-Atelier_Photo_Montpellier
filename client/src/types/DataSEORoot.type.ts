type DataSEORootType = {
    autor: string;
    twitterCompte: string;
    "@context": string;
    "@type": {
        Local: string;
        BreadcrumbList: string;
        Service: string;
        ContactPage: string;
        HomePage: string;
        CollectionPage: string;
        ImageGallery: string;
        ItemList: string;
        Person: string;
        Blog: string;
    };
    id_LocalBusiness: string;
    description: string;
    name: string;
    telephone: string;
    email: string;
    url: string;
    img: string;
    publisher: {
        "@type": string;
        "name": string;
        "logo": {
            "@type": string;
            url: string;
            width: number;
            height: number;
        };
    };
    logo: {
        "@type": string;
        url: string;
        width: number;
        height: number;
    }
    openingHours: string[];
    sameAs: string[];
    termsOfService: string;
    worksFor: {
        "@type": string;
        name: string;
        url: string;
    };
    alumniOf: {
        "@type": string;
        name: string;
    }[];
    knowsAbout: string[];
    areaServed: {
        "@type": string;
        name: string;
        address: {
            "@type": string;
            addressLocality: string;
            postalCode: string;
            addressCountry: string;
        };
    }[];
};
  
export default DataSEORootType;
