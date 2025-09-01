import { Helmet } from "react-helmet-async";
import DataSEOHelmetType from "../../types/DataSEOHelmet.type";

import DataSEORoots from "../DataSEORoot.data.seo";
import DataSEO_CGVs from "./DataSEO_CGV.data.seo";

import DataSEORootType from "../../types/DataSEORoot.type";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

import JSON_LD_LocalBusiness_Root_Schema_SEO from "../JSON-LD_LocalBusiness_Root.schema.seo";
import JSON_LD_WebPage_CGV_Schema_SEO from "./JSON-LD_WebPage_CGV.schema.seo";
import JSON_LD_TermsOfService_CGV_Schema_SEO from "./JSON-LD_TermsOfService_CGV.schema.seo";
import JSON_LD_Breadcrumb_CGV_Schema_SEO from "./JSON-LD_Breadcrumb_CGV.schema.seo";


function Helmet_CGV_SEO() {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_CGV: DataSEOTargetOneType = DataSEO_CGVs(); /* Récupération des données SEO de la page */

    const SEO: DataSEOHelmetType = {
        title: DataSEO_CGV.title,
        autor: DataSEO_CGV.autor,
        description: DataSEO_CGV.description,
        url: DataSEO_CGV.url,
        img: DataSEO_CGV.img_Helmet,
        twitterUrlImg: DataSEO_CGV.twitterUrlImg || DataSEO_CGV.img_Helmet, // fallback
        twitterCompte: DataSEORoot.twitterCompte,
        keywords: DataSEO_CGV.keywords,
        type: DataSEO_CGV.type,
    };

    const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

    return (
        <Helmet>
            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON_LD_LocalBusiness_Root_Schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_WebPage_CGV_Schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_TermsOfService_CGV_Schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Breadcrumb_CGV_Schema_SEO()}
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

export default Helmet_CGV_SEO;
