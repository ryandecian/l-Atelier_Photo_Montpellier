/* Import des Configs */
import { ENV } from "../../config/ENV.config";

/* Import des Types */
import type { MetaName_script_Type } from "./metaName.script.type";


type MetaName_script_Type_Props = {
    "data": MetaName_script_Type;
};

/**
 * ### Documentation : Script MetaName SEO
 * Ce composant réutilisable a pour objectif de générer les balises meta pour le SEO et le partage social de la page.
 * Il est utilisé pour : 
 * - Toutes les pages du site, avec des exigences spécifiques en matière de SEO et de structuration des métadonnées.
 * 
 * ---
 * ### Les clés attendues en paramètre de la fonction sont :
 * @param {MetaName_script_Type} data - L'objet contenant les informations nécessaires aux balises Meta et Open Graph.
 * @param {string} data.author - **[author]** - Auteur de la page (10 à 60 caractères max).
 * @param {string} data.description - **[description]** - Résumé dense de la page d'accueil pour le SEO/GEO (80 à 160 caractères max).
 * @param {Object} data.img_seo - **[img_seo]** - Informations sur l'image SEO de la page.
 * @param {string} data.img_seo.uri_image - **[uri_image]** - URI de l'image avec slash initial sans le nom de domaine.
 * @param {string} data.img_seo.alt_image - **[alt_image]** - Texte alternatif de l'image pour le SEO.
 * @param {string} data.title - **[title]** - Titre de la page pour le SEO/GEO (50 à 60 caractères max).
 * @param {string} data.type_website - **[type_website]** - Type de site web pour l'Open Graph (ex: website, article, profile, etc.).
 * @param {string} data.uri_page - **[uri_page]** - URI de la page sans le nom de domaine (router).
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {React.ReactNode} Retourne un élément JSX contenant les balises MetaName SEO.
 */
function MetaName_script_SEO({ data }: MetaName_script_Type_Props): React.ReactNode {
    const domain = ENV("VITE_DOMAIN_CLIENT");
    const fullPageUrl = data.uri_page ? `${domain}/${data.uri_page}` : domain;
    const fullImageUrl = `${domain}${data.img_seo.uri_image}`;

    return (
        <>
            {/* Métadonnées générales */}
            <title>{data.title}</title>
            <meta name="description" content={data.description} />
            <meta name="author" content={data.author} />

            {/* SEO pour les moteurs de recherche */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
            <link rel="canonical" href={fullPageUrl} />

            {/* Open Graph (Facebook, LinkedIn, WhatsApp...) */}
            <meta property="og:site_name" content="L'Atelier Photo Montpellier" />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:url" content={fullPageUrl} />
            <meta property="og:type" content={data.type_website} />
            <meta property="og:locale" content="fr_FR" />

            {/* Open Graph Image */}
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:secure_url" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={data.img_seo.alt_image} />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={data.title} />
            <meta name="twitter:description" content={data.description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:image:alt" content={data.img_seo.alt_image} />
        </>
    );
}

export { MetaName_script_SEO };
