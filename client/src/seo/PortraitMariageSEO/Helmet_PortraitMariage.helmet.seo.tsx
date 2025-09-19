import { Helmet } from "react-helmet-async";
import DataSEOHelmetType from "../../types/seo/dataSEOHelmet.type";

import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import DataSEO_PortraitMariages from "./DataSEO_PortraitMariage.data.seo";

import DataSEORootType from "../../types/seo/dataSEORoot.type";
import DataSEOTargetOneType from "../../types/seo/dataSEOTargetOne.type";

import { JSON_LD_LocalBusiness_Root_schema_SEO } from "../JSON-LD_LocalBusiness_Root.schema.seo";
import JSON_LD_Service_PortraitMariage_Schema_SEO from "./JSON-LD_Service_PortraitMariage.schema.seo";
import JSON_LD_Breadcrumb_PortraitMariage_Schema_SEO from "./JSON-LD_Breadcrumb_PortraitMariage.schema.seo";


function Helmet_PortraitMariage_SEO() {
    const DataSEORoot: DataSEORootType = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const DataSEO_PortraitMariage: DataSEOTargetOneType = DataSEO_PortraitMariages(); /* Récupération des données SEO de la page */

    const SEO: DataSEOHelmetType = {
        title: DataSEO_PortraitMariage.title,
        autor: DataSEO_PortraitMariage.autor,
        description: DataSEO_PortraitMariage.description,
        url: DataSEO_PortraitMariage.url,
        img: DataSEO_PortraitMariage.img_Helmet,
        twitterUrlImg: DataSEO_PortraitMariage.twitterUrlImg || DataSEO_PortraitMariage.img_Helmet, // fallback
        twitterCompte: DataSEORoot.twitterCompte,
        keywords: DataSEO_PortraitMariage.keywords,
        type: DataSEO_PortraitMariage.type,
    };

    const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

    return (
        <Helmet>
            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON_LD_LocalBusiness_Root_schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Service_PortraitMariage_Schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Breadcrumb_PortraitMariage_Schema_SEO()}
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

export default Helmet_PortraitMariage_SEO;
