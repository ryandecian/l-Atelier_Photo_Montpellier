/* Import des composants Router */
import router from "../../router/router";

/* Import des Types */
import { dataMasterSEO_Type } from "./dataMasterSEO.type";

function dataMasterSEO_data_SEO(): dataMasterSEO_Type {
    const dataMasterSEO: dataMasterSEO_Type = {
        "@context": "https://schema.org",
        "@type": {
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
    };

    return (
        dataMasterSEO
    );
}

export { dataMasterSEO_data_SEO };
