import DataSEORoots from "../dataSEO_Root.data.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Portfolios from "./DataSEO_Portfolio.data.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne.type";

import generatePortfolioHasPartSEO from "./utils/generatePortfolioHashPartSEO.utils";

function JSON_LD_ImageGallery_Portfolio_Schema_SEO(): string {
  const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
  const DataSEO_Portfolio: DataSEOTargetOneType = DataSEO_Portfolios(); /* Récupération des données SEO de la page */

  const JSON_LD = JSON.stringify({
    "@context": DataSEORoot["@context"],
    "@type": DataSEORoot["@type"].ImageGallery, /* (Obligatoire) Type de la donnée */
    "name": DataSEO_Portfolio.name_ImageGalery, /* Nom de la Galerie */
    "url": DataSEO_Portfolio.url, /* URL de la page */
    "associatedMedia": generatePortfolioHasPartSEO()
  });

  return JSON_LD;
}

export default JSON_LD_ImageGallery_Portfolio_Schema_SEO;
