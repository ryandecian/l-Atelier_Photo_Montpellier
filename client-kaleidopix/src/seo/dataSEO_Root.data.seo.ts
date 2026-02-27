/* Import des composants Router */
// import routerExt from "../router/routerExt.router";
import router from "../router/router";


/* Import des Types */
import type { DataSEORoot_Type } from "../types/seo/dataSEORoot.type";

function dataSEO_Root_data_SEO(): DataSEORoot_Type {
    const dataSEORoots = {
        /*Désigne la personne ou l’organisation qui a rédigé le contenu. */
        author: {
            "@type": "Person",
            "name": "Anne SAUNIER",
            "url": `${import.meta.env.VITE_DOMAIN_CLIENT}${router[5].path}`, /* Page "Qui suis-je" */
        },
        /* Créateur, développeur de la page */
        creator: {
            "@type": "Person",
            "name": "Ryan DECIAN",
        },

        /* Data JSON-LD */
        "@context": "https://schema.org",
        "@type": {
            Local: "LocalBusiness",                /* = Représente une entreprise locale (nom, adresse, horaires, activité) */
            BreadcrumbList: "BreadcrumbList",      /* = Structure du fil d’Ariane pour Google (hiérarchie de navigation) */
            Service: "Service",                    /* = Décrit une prestation proposée (ex : séance photo, réparation, etc.) */
            ContactPage: "ContactPage",            /* = Page de contact (infos pour joindre l’entreprise) */
            HomePage: "HomePage",                  /* = Page d’accueil du site */
            CollectionPage: "CollectionPage",      /* = Page listant plusieurs contenus (catégorie, galerie, blog…) (Généralement utiliser dans un portfolio) */
            ImageGallery: "ImageGallery",          /* = Page contenant une galerie d’images */
            ItemList: "ItemList",                  /* = Un conteneur de liste */
            ListItem: "ListItem",                  /* = Un élément dans une liste, utilisé dans les JSON-LD_Breadcrumb */
            Person: "Person",                      /* = Une personne (nom, rôle, photo, réseaux sociaux…) */
            Blog: "Blog",                          /* = Représente le blog dans son ensemble */
            BlogPosting: "BlogPosting",            /* = Un article de blog individuel */
            WebPage: "WebPage",                    /* = Type générique pour toute page web */
            TermsOfService: "TermsOfService",      /* = Page des conditions générales / mentions légales / CGU */
            VideoObject: "VideoObject"             /* = Décrit une vidéo (URL, miniature, durée, auteur…) */
        },
        id_LocalBusiness: `${import.meta.env.VITE_DOMAIN_CLIENT}#kaleidopix`, /* @id SEO-friendly, correspond id unique de l'entreprise */
        description: "Kaleidopix, propose des prestations de vidéo et photographiques professionnelles à Montpellier et ses environs", // Description de l'entreprise
        name: "Kaleidopix", /* Nom de l'entreprise */
        telephone: "+33652677333", /* Numéro de téléphone de l'entreprise (Manuel) */
        email: "as@kaleidopix.fr", /* Adresse email de l'entreprise (Dynamique) */
    };

    return dataSEORoots;
}

export { dataSEO_Root_data_SEO };
