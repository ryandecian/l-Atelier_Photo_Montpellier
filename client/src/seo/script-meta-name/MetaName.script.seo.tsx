/* Import des Configs */
import { ENV } from "../../config/ENV.config";

/* Import des Types */
import type { MetaName_script_Type } from "./metaName.script.type";

type MetaName_script_Type_Props = {
    "data": MetaName_script_Type;
}

function MetaName_script_SEO({ data }: MetaName_script_Type_Props) : React.JSX.Element {
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
            <link rel="canonical" href={`${ENV("VITE_DOMAIN_CLIENT")}${data.url}`} />

            {/* Open Graph (Facebook, LinkedIn, WhatsApp...) */}
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:image" content={SEO.img} />
            <meta property="og:url" content={data.url} />
            <meta property="og:type" content={SEO.type.website} />
            <meta property="og:locale" content="fr_FR" />
        </>
    );
}

export { MetaName_script_SEO };
