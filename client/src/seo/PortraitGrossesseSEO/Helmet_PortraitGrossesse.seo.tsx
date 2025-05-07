import { Helmet } from "react-helmet-async";
import DataSEORoot from "../DataSEORoot.seo";
import DataSEO_PortraitGrossesse from "./DataSEO_PortraitGrossesse.seo";
import JSON_LD_LocalBusiness_Root_Schema_SEO from "../JSON-LD_LocalBusiness_Root.schema.seo";
import JSON_LD_Service_PortraitGrossesse_Schema_SEO from "./JSON-LD_Service_PortraitGrossesse.schema.seo";

const SEO = {
    title: DataSEO_PortraitGrossesse.title,
    autor: DataSEORoot.autor,
    description: DataSEO_PortraitGrossesse.description,
    id: DataSEORoot.id_LocalBusiness, 
    url: DataSEO_PortraitGrossesse.url,
    img: DataSEO_PortraitGrossesse.img,
    twitterUrlImg: DataSEO_PortraitGrossesse.twitterUrlImg || DataSEO_PortraitGrossesse.img, // fallback
    twitterCompte: DataSEORoot.twitterCompte,
    keywords: DataSEO_PortraitGrossesse.keywords,
    type: DataSEO_PortraitGrossesse.type,
};

function Helmet_PortraitGrossesse_SEO() {
    const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

    return (
        <Helmet>
            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON_LD_LocalBusiness_Root_Schema_SEO}
            </script>
            <script type="application/ld+json">
                {JSON_LD_Service_PortraitGrossesse_Schema_SEO}
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

export default Helmet_PortraitGrossesse_SEO;
