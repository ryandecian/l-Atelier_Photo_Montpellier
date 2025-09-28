/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Portfolio_data_SEO } from "./dataSEO_Portfolio.data.seo";

/* Import des Types */
import { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

/* Import des Utils */
import { generatePortfolioHasPartSEO_Utils } from "./utils/generatePortfolioHashPartSEO.utils";

function JSON_LD_ImageGallery_Portfolio_schema_SEO(): string {
  const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
  const dataSEO_Portfolio: DataSEOTargetOne_Type = dataSEO_Portfolio_data_SEO(); /* Récupération des données SEO de la page */

  const JSON_LD = JSON.stringify({
    "@context": dataSEORoot["@context"],
    "@type": dataSEORoot["@type"].ImageGallery, /* (Obligatoire) Type de la donnée */
    "name": dataSEO_Portfolio.name_ImageGalery, /* Nom de la Galerie */
    "url": dataSEO_Portfolio.url, /* URL de la page */
    "associatedMedia": generatePortfolioHasPartSEO_Utils()
  });

  return JSON_LD;
}

export { JSON_LD_ImageGallery_Portfolio_schema_SEO };
