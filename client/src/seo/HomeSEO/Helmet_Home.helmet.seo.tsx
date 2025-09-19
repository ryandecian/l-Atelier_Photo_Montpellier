import { Helmet } from "react-helmet-async";
import DataSEOHelmetType from "../../types/seo/dataSEOHelmet.type";

import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEO_Homes from "./DataSEO_Home.data.seo";

import DataSEORootType from "../../types/seo/dataSEORoot.type";
import DataSEOTargetOneType from "../../types/seo/dataSEOTargetOne.type";

import { JSON_LD_LocalBusiness_Root_schema_SEO } from "../JSON-LD_LocalBusiness_Root.schema.seo";
import JSON_LD_HomePage_Home_Schema_SEO from "./JSON-LD_HomePage_Home.schema.seo";
import JSON_LD_Breadcrumb_Home_Schema_SEO from "./JSON-LD_Breadcrumb_Home.schema.seo";


function Helmet_Home_SEO() {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_Home: DataSEOTargetOneType = DataSEO_Homes(); /* Récupération des données SEO de la page */

    const SEO: DataSEOHelmetType = {
        title: DataSEO_Home.title,
        autor: DataSEO_Home.autor,
        description: DataSEO_Home.description,
        url: DataSEO_Home.url,
        img: DataSEO_Home.img_Helmet,
        twitterUrlImg: DataSEO_Home.twitterUrlImg || DataSEO_Home.img_JSON_LD, // fallback
        twitterCompte: DataSEORoot.twitterCompte,
        keywords: DataSEO_Home.keywords,
        type: DataSEO_Home.type,
    };

    const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

    return (
        <Helmet>
            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON_LD_LocalBusiness_Root_schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_HomePage_Home_Schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Breadcrumb_Home_Schema_SEO()}
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

export default Helmet_Home_SEO;
