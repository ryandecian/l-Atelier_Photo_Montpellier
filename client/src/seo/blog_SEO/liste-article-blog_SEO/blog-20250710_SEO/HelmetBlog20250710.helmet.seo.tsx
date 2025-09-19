/* Import des composants React */
import { Helmet } from "react-helmet-async";

/* Import des Components */
import { dataSEO_Root_data_SEO } from "../../../dataSEO_Root.data.seo";
import { dataSEO_Blog_20250710_data_SEO } from "./dataSEO_Blog_20250710.data.seo";

/* Import des JSON_LD */
import { JSON_LD_LocalBusiness_Root_schema_SEO } from "../../../JSON-LD_LocalBusiness_Root.schema.seo";
import { JSON_LD_BlogPosting_Blog_20250710_schema_SEO } from "./JSON-LD_BlogPosting_Blog_20250710.schema.seo";
import { JSON_LD_Breadcrumb_Blog_20250710_schema_SEO } from "./JSON-LD_Breadcrumb_Blog_20250710.schema.seo";

/* Import des Types */
import { DataSEOHelmet_Type } from "../../../../types/seo/dataSEOHelmet.type";
import { DataSEORoot_Type } from "../../../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../../../types/seo/dataSEOTargetOne.type";

function Helmet_Blog_20250710_helmet_SEO() {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Blog_20250710: DataSEOTargetOne_Type = dataSEO_Blog_20250710_data_SEO(); /* Récupération des données SEO de la page */

    const SEO: DataSEOHelmet_Type = {
        title: dataSEO_Blog_20250710.title,
        autor: dataSEO_Blog_20250710.autor,
        description: dataSEO_Blog_20250710.description,
        url: dataSEO_Blog_20250710.url,
        img: dataSEO_Blog_20250710.img_Helmet,
        twitterUrlImg: dataSEO_Blog_20250710.twitterUrlImg || dataSEO_Blog_20250710.img_Helmet, // fallback
        twitterCompte: dataSEORoot.twitterCompte,
        keywords: dataSEO_Blog_20250710.keywords,
        type: dataSEO_Blog_20250710.type,
    };

    const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

    return (
        <Helmet>
            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON_LD_LocalBusiness_Root_schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_BlogPosting_Blog_20250710_schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Breadcrumb_Blog_20250710_schema_SEO()}
            </script>

            {/* Langue principale du document */}
            <html lang="fr" />

            {/* Métadonnées générales */}
            <title>{SEO.title}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={SEO.description} />
            <meta name="author" content={SEO.autor} />
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
            <meta property="og:type" content={SEO.type.article} />
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

export { Helmet_Blog_20250710_helmet_SEO };
