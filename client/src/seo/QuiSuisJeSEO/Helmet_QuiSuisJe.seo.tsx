import { Helmet } from "react-helmet-async";
import DataSEOHelmetType from "../../types/DataSEOHelmet";

import DataSEORoots from "../DataSEORoot.seo";
import DataSEO_QuiSuisJes from "./DataSEO_QuiSuisJe.seo";

import DataSEORootType from "../../types/DataSEORoot.type";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

import JSON_LD_LocalBusiness_Root_Schema_SEO from "../JSON-LD_LocalBusiness_Root.schema.seo";
import JSON_LD_Person_QuiSuisJe_Schema_SEO from "./JSON-LD_Person_QuiSuisJe.schema.seo";
import JSON_LD_Breadcrumb_QuiSuisJe_Schema_SEO from "./JSON-LD_Breadcrumb_QuiSuisJe.schema.seo";


function Helmet_QuiSuisJe_SEO() {
    const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
    const DataSEO_QuiSuisJe: DataSEOTargetOneType = DataSEO_QuiSuisJes(); /* Récupération des données SEO de la page */

    const SEO: DataSEOHelmetType = {
        title: DataSEO_QuiSuisJe.title,
        autor: DataSEO_QuiSuisJe.autor,
        description: DataSEO_QuiSuisJe.description,
        url: DataSEO_QuiSuisJe.url,
        img: DataSEO_QuiSuisJe.img_Helmet,
        twitterUrlImg: DataSEO_QuiSuisJe.twitterUrlImg || DataSEO_QuiSuisJe.img_Helmet, // fallback
        twitterCompte: DataSEORoot.twitterCompte,
        keywords: DataSEO_QuiSuisJe.keywords,
        type: DataSEO_QuiSuisJe.type,
    };

    const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

    return (
        <Helmet>
            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON_LD_LocalBusiness_Root_Schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Person_QuiSuisJe_Schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Breadcrumb_QuiSuisJe_Schema_SEO()}
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

export default Helmet_QuiSuisJe_SEO;
