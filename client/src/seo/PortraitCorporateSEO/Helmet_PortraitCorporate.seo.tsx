import { Helmet } from "react-helmet-async";
import DataSEOHelmetType from "../../types/DataSEOHelmet";

import DataSEORoots from "../DataSEORoot.seo";
import DataSEO_PortraitCorporates from "./DataSEO_PortraitCorporate.seo";

import DataSEORootType from "../../types/DataSEORoot.type";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

import JSON_LD_LocalBusiness_Root_Schema_SEO from "../JSON-LD_LocalBusiness_Root.schema.seo";
import JSON_LD_Service_PortraitCorporate_Schema_SEO from "./JSON-LD_Service_PortraitCorporate.schema.seo";
import JSON_LD_Breadcrumb_PortraitCorporate_Schema_SEO from "./JSON-LD_Breadcrumb_PortraitCorporate.schema.seo";

import useFontPreload from "../../hook/useFontPreload.utils.hook";

function Helmet_PortraitCorporate_SEO() {
    useFontPreload(); // Hook pour précharger les polices d'écriture

    const DataSEORoot: DataSEORootType = DataSEORoots();
    const DataSEO_PortraitCorporate: DataSEOTargetOneType = DataSEO_PortraitCorporates();

    const SEO: DataSEOHelmetType = {
        title: DataSEO_PortraitCorporate.title,
        autor: DataSEO_PortraitCorporate.autor,
        description: DataSEO_PortraitCorporate.description,
        url: DataSEO_PortraitCorporate.url,
        img: DataSEO_PortraitCorporate.img_Helmet,
        twitterUrlImg: DataSEO_PortraitCorporate.twitterUrlImg || DataSEO_PortraitCorporate.img_Helmet,
        twitterCompte: DataSEORoot.twitterCompte,
        keywords: DataSEO_PortraitCorporate.keywords,
        type: DataSEO_PortraitCorporate.type,
    };

    const filterKeywords = Object.values(SEO.keywords).filter(k => k.trim() !== "").join(", ");

    return (
        <Helmet>
            {/* ✅ Balises JSON-LD */}
            <script type="application/ld+json">
                {JSON_LD_LocalBusiness_Root_Schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Service_PortraitCorporate_Schema_SEO()}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Breadcrumb_PortraitCorporate_Schema_SEO()}
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
            <link rel="canonical" href={SEO.url} />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />

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

            {/* Preload des polices avec media différé */}
            <link
                rel="preload"
                href="/assets/Fonts/SairaCondensed/SairaCondensed-SemiBold.woff2"
                as="font"
                type="font/woff2"
                media="print"
                data-font-preload="true"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/assets/Fonts/Quicksand/Quicksand-Medium.woff2"
                as="font"
                type="font/woff2"
                media="print"
                data-font-preload="true"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/assets/Fonts/AnneSignature/AnneSignature.woff2"
                as="font"
                type="font/woff2"
                media="print"
                data-font-preload="true"
                crossOrigin="anonymous"
            />
        </Helmet>
    );
}

export default Helmet_PortraitCorporate_SEO;
