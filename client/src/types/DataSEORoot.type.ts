type DataSEORootType = {
    autor: string;
    twitterCompte: string;
    "@context": string;
    "@type": {
      Local: string;
      Service: string;
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
