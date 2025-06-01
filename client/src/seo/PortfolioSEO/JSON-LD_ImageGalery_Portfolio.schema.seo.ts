import DataSEORoots from "../DataSEORoot.seo";
import DataSEORootType from "../../types/DataSEORoot.type";

import DataSEO_Portfolios from "./DataSEO_Portfolio.seo";
import DataSEOTargetOneType from "../../types/DataSEOTargetOne";

import generatePortfolioHasPartSEO from "./utils/generatePortfolioHashPartSEO.utils";

function JSON_LD_ImageGallery_Portfolio_Schema_SEO(): string {
  const baseUrl = import.meta.env.VITE_DOMAIN_CLIENT;
  const DataSEORoot: DataSEORootType = DataSEORoots(); /* Récupération des données SEO */
  const DataSEO_Portfolio: DataSEOTargetOneType = DataSEO_Portfolios(); /* Récupération des données SEO de la page */

  const JSON_LD = JSON.stringify({
    "@context": DataSEORoot["@context"],
    "@type": "ImageGallery",
    "name": "Galerie photo – L'Atelier Photo Montpellier",
    "url": `${baseUrl}/portfolio`,
    "associatedMedia": generatePortfolioHasPartSEO()
  });

  return JSON_LD;
}

export default JSON_LD_ImageGallery_Portfolio_Schema_SEO;
