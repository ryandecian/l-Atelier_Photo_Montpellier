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
    };
    id_LocalBusiness: string;
    description: string;
    name: string;
    telephone: string;
    email: string;
    url: string;
    img: string;
    logo: string;
    openingHours: string[];
    sameAs: string[];
    termsOfService: string;
    birthPlace: {
        "@type": string;
        address: {
            "@type": string;
            addressLocality: string;
            addressCountry: string;
        };
    }
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
