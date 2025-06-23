import externalLinks from "../constants/externalLinks";
import DataSEORootType from "../types/DataSEORoot.type";
import ListDataRouter from "../router/router";

function DataSEORoot(): DataSEORootType {
    const router = ListDataRouter; /* Récupération des données du routeur */
    const DataSEORoots = {
        /* Data Helmet */
        author: {
            "@type": "Person",
            "name": "Anne SAUNIER",
            "url": `${import.meta.env.VITE_DOMAIN_CLIENT}${router[7].path}` // Page "Qui suis-je"
        },
        creator: {
            "@type": "Person",
            "name": "Anne SAUNIER"
        },
        twitterCompte: "", /*@MonCompteTwitter*/ /*Permet d'identifier le compte officiel*/
    
        /* Data JSON-LD */
        "@context": "https://schema.org",
        "@type": {
            Local: "LocalBusiness",
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
            TermsOfService: "TermsOfService"
        },
        id_LocalBusiness: `${import.meta.env.VITE_DOMAIN_CLIENT}#lapm`, /* @id SEO-friendly, correspond id unique de l'entreprise */
        description: "L'Atelier Photo Montpellier, dirigé par Anne SAUNIER, propose des prestations photographiques professionnelles à Montpellier et ses environs : grossesse, mariage, portraits corporate, lifestyle...", // Description de l'entreprise
        name: "L'Atelier Photo Montpellier", /* Nom de l'entreprise */
        telephone: "+33 6 52 67 73 33", /* Numéro de téléphone de l'entreprise (Manuel) */
        email: externalLinks.emailAnne, /* Adresse email de l'entreprise (Dynamique) */
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}`, /* URL de la page d'accueil de l'entreprise (Dynamique) */
        img: `${import.meta.env.VITE_DOMAIN_CLIENT}/dans-les-yeux-de-sacha.jpg`, // Lien URL public de l'image de l'entreprise (Dynamique) */
        isPartOf: {
            "@type": "WebSite",
            "name": "l'Atelier Photo Montpellier",
            "url": `${import.meta.env.VITE_DOMAIN_CLIENT}` /* URL de la page d'accueil de l'entreprise (Dynamique) */
        },
        mainEntity: {
            "@type": "Organization", 
            "name": "l'Atelier Photo Montpellier",
            "url": "https://atelier-photo-montpellier.fr",
        }, /* Entité principale de l'entreprise */
        publisher: {
            "@type": "Organization",
            "name": "l'Atelier Photo Montpellier",
            "logo": {
                "@type": "ImageObject",
                "url": `${import.meta.env.VITE_DOMAIN_CLIENT}/logo-LAPM-l-atelier-photo-montpellier.png`, // Logo au format carré si possible
                "width": 200,
                "height": 200
            },
        },
        logo: {
            "@type": "ImageObject",
            "url": `${import.meta.env.VITE_DOMAIN_CLIENT}/logo-LAPM-l-atelier-photo-montpellier.png`, // Logo au format carré si possible
            "width": 200,
            "height": 200
        },
        openingHours: [
            "Mo-Su 10:00-13:00",
            "Mo-Su 14:00-19:00"
        ], /* Horaires d'ouverture du lundi au dimanche de 10h à 13het de 14h à 19h */
        sameAs: [
            externalLinks.instagram, /* Compte Instagram */
            externalLinks.facebook, /* A modifier car ce n'est pas le bon compte */
        ],
        termsOfService: `${import.meta.env.VITE_DOMAIN_CLIENT}/${router[9].path}`, /* Conditions d'utilisation de l'entreprise (Dynamique) */
        "worksFor": {
            /* Indique de la personne est liée à cette activité */
            "@type": "Organization",
            "name": "l'Atelier Photo Montpellier",
            "url": `${import.meta.env.VITE_DOMAIN_CLIENT}`
        },
        "alumniOf": [
            /* Établissement d'enseignement supérieur où l'auteur a étudié */
            {
                "@type": "EducationalOrganization",
                "name": "Studio B612"
            },
        ],
        "knowsAbout": [
            /* Compétences générales */
            "Photographie professionnelle",
            "Portrait photo",
            "Photographie de mariage",
            "Photographie de grossesse",
            "Photographie de nouveau-né",
            "Photographie de famille",
            "Photographie lifestyle",
            "Photographie corporate",
            "Reportage photo",

            /* Techniques */
            "Photographie en studio",
            "Photographie en lumière naturelle",
            "Éclairage au flash",
            "Éclairage en intérieur",
            "Utilisation de réflecteurs",
            "Gestion des ombres et lumières",
            "Techniques de composition photo",
            "Cadrage artistique",
            "Mise en scène photographique",

            /* Post-traitement & outils numériques */
            "Post-traitement numérique",
            "Retouche photo professionnelle",
            "Utilisation de Lightroom",
            "Utilisation de Photoshop",
            "Calibration des couleurs",
            "Étalonnage d’image",
            "Workflow numérique pour photographes",
            "Archivage et organisation des clichés",

            /* Relation client / métier */
            "Direction de modèle",
            "Communication avec les clients",
            "Gestion de séance photo",
            "Création de portfolio",
            "Création de packs et formules photo",
            "Rédaction de contrats de prestation",
            "Gestion d’un studio photo indépendant",
            "Entrepreneuriat en photographie",
            "Développement d’identité visuelle",
            "Optimisation de l’expérience client",

            /* Web / communication visuelle */
            "Création de contenu visuel pour les réseaux sociaux",
            "Photographie pour Instagram",
            "Photographie événementielle",
            "Photographie émotionnelle",
            "Optimisation visuelle pour site web",
            "Photographie commerciale",
            "Storytelling visuel",

            /* Autres domaines connexes */
            "Esthétique visuelle",
            "Analyse d’image",
            "Histoire de la photographie",
            "Suivi de tendance visuelle",
            "Techniques d’impression photo",
            "Sélection et édition d’albums photo",
            "Création de books photo"
        ],
        "areaServed": [
            {
                "@type": "Place",
                "name": "Grabels",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Grabels",
                    "postalCode": "34790",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Montpellier",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Montpellier",
                    "postalCode": "34000",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Juvignac",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Juvignac",
                    "postalCode": "34990",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Combaillaux",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Combaillaux",
                    "postalCode": "34980",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Montferrier-sur-Lez",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Montferrier-sur-Lez",
                    "postalCode": "34980",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Saint-Clément-de-Rivière",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Saint-Clément-de-Rivière",
                    "postalCode": "34980",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Saint-Gély-du-Fesc",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Saint-Gély-du-Fesc",
                    "postalCode": "34980",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Lattes",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lattes",
                    "postalCode": "34970",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Le Crès",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Le Crès",
                    "postalCode": "34920",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Clapiers",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Clapiers",
                    "postalCode": "34830",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Laverune",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Laverune",
                    "postalCode": "34880",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Clapiers",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Clapiers",
                    "postalCode": "34830",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Jacou",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Jacou",
                    "postalCode": "34830",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Clermont L'Hérault",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Clermont L'Hérault",
                    "postalCode": "34800",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Villeneuve-lès-Maguelone",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Villeneuve-lès-Maguelone",
                    "postalCode": "34750",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Vendargues",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Villeneuve-lès-MaguelonVeargues",
                    "postalCode": "34740",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Prades-le-Lez",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Prades-le-Lez",
                    "postalCode": "34730",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Lodeve",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lodeve",
                    "postalCode": "34700",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Fabrègues",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Fabrègues",
                    "postalCode": "34690",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Baillargues",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Baillargues",
                    "postalCode": "34670",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Cournonterral",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Cournonterral",
                    "postalCode": "34660",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Pignan",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Pignan",
                    "postalCode": "34570",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Saint-Paul-et-Valmalle",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Saint-Paul-et-Valmalle",
                    "postalCode": "34570",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Poussan",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Poussan",
                    "postalCode": "34570",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Montbazin",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Montbazin",
                    "postalCode": "34560",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Béziers",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Béziers",
                    "postalCode": "34500",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Pérols",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Pérols",
                    "postalCode": "34470",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Saint-Jean-de-Védas",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Saint-Jean-de-Védas",
                    "postalCode": "34430",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Lunel",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lunel",
                    "postalCode": "34400",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Agde",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "LuneAgde",
                    "postalCode": "34300",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "La Grande-Motte",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "La Grande-Motte",
                    "postalCode": "34280",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Palavas-les-Flots",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Palavas-les-Flots",
                    "postalCode": "34250",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Sète",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sète",
                    "postalCode": "34200",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Castelnau-le-Lez",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Castelnau-le-Lez",
                    "postalCode": "34170",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Castries",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Castries",
                    "postalCode": "34160",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Aniane",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Castelnau-le-LezAniane",
                    "postalCode": "34150",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Gignac",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Gignac",
                    "postalCode": "34150",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Montpeyrou",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Montpeyrou",
                    "postalCode": "34150",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Mauguio",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mauguio",
                    "postalCode": "34130",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Pezenas",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Pezenas",
                    "postalCode": "34120",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Frontignan",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Frontignan",
                    "postalCode": "34110",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Sommières",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sommières",
                    "postalCode": "30250",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Le Grau-du-Roi",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Le Grau-du-Roi",
                    "postalCode": "30240",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Aigues-Mortes",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Aigues-Mortes",
                    "postalCode": "30220",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Nîmes",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nîmes",
                    "postalCode": "30000",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Arles",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Arles",
                    "postalCode": "13200",
                    "addressCountry": "FR"
                }
            },
            {
                "@type": "Place",
                "name": "Narbonne",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Narbonne",
                    "postalCode": "11100",
                    "addressCountry": "FR"
                }
            },
        ]
    }
    return (
        DataSEORoots
    )
};

export default DataSEORoot
