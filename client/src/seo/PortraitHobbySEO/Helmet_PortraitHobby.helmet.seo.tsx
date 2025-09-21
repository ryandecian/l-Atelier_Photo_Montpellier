/* Import des composants React */
import { Helmet } from "react-helmet-async";

/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_PortraitHobby_data_SEO } from "./dataSEO_PortraitHobby.data.seo";

/* Import des JSON_LD */
import { JSON_LD_LocalBusiness_Root_schema_SEO } from "../JSON-LD_LocalBusiness_Root.schema.seo";
import { JSON_LD_Breadcrumb_PortraitHobby_schema_SEO } from "./JSON-LD_Breadcrumb_PortraitHobby.schema.seo";
import { JSON_LD_Service_PortraitHobby_schema_SEO } from "./JSON-LD_Service_PortraitHobby.schema.seo";

/* Import des Types */
import { DataSEOHelmet_Type } from "../../types/seo/dataSEOHelmet.type";
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function Helmet_PortraitHobby_helmet_SEO() {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_PortraitHobby: DataSEOTargetOne_Type = dataSEO_PortraitHobby_data_SEO(); /* Récupération des données SEO de la page */

    const SEO: DataSEOHelmet_Type = {
        title: dataSEO_PortraitHobby.title,
        author: dataSEO_PortraitHobby.author,
        description: dataSEO_PortraitHobby.description,
        url: dataSEO_PortraitHobby.url,
        img: dataSEO_PortraitHobby.img_Helmet,
        twitterUrlImg: dataSEO_PortraitHobby.twitterUrlImg || dataSEO_PortraitHobby.img_Helmet, // fallback
        twitterCompte: dataSEORoot.twitterCompte,
        keywords: dataSEO_PortraitHobby.keywords,
        type: dataSEO_PortraitHobby.type,
    };

    const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

    return (
        <Helmet>
            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON_LD_LocalBusiness_Root_schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Service_PortraitHobby_schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Breadcrumb_PortraitHobby_schema_SEO()}
            </script>

            {/* Langue principale du document */}
            <html lang="fr" />

            {/* Métadonnées générales */}
            <title>{SEO.title}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={SEO.description} />
            <meta name="author" content={SEO.author} />
            {filterKeywords && <meta name="keywords" content={filterKeywords} />}

            {/* SEO pour les moteurs de recherche */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
            <link rel="canonical" href={SEO.url} />

            {/* Open Graph (Facebook, LinkedIn, WhatsApp...) */}
            <meta property="og:title" content={SEO.title} />
            <meta property="og:description" content={SEO.description} />
            <meta property="og:image" content={SEO.img} />
            <meta property="og:url" content={SEO.url} />
            <meta property="og:type" content={SEO.type.website} />
            <meta property="og:locale" content="fr_FR" />

            {/* Twitter Cards */}
            <meta name="twitter:title" content={SEO.title} />
            <meta name="twitter:description" content={SEO.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={SEO.twitterUrlImg} />
            <meta name="twitter:site" content={SEO.twitterCompte} />
        </Helmet>
    );
}

export { Helmet_PortraitHobby_helmet_SEO };
