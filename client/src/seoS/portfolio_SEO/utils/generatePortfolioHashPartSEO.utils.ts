/* Import des Components de Data */
import { imagesPortfolio_Data } from "../../../components/public/portfolio/imagesPortfolio.data";

/**
 * Génère un tableau d’objets JSON-LD de type "ImageObject" à partir 
 * d’une sélection d’images du portfolio. 
 * Sert à enrichir le SEO en décrivant explicitement, via la propriété 
 * "hasPart", certaines images représentatives du portfolio.
 */

function generatePortfolioHasPartSEO_Utils() {
  const baseUrl = import.meta.env.VITE_DOMAIN_CLIENT;

  const selectedImages = [
    imagesPortfolio_Data.Album_Paysage[0],
    imagesPortfolio_Data.Album_Paysage[1],
    imagesPortfolio_Data.Album_Rue_Street[0],
    imagesPortfolio_Data.Album_Rue_Street[1],
    imagesPortfolio_Data.Album_Urbaine[0],
    imagesPortfolio_Data.Album_Pro_Perso[0],
  ];

  return selectedImages.map((img) => ({
    "@type": "ImageObject",
    name: img.alt,
    contentUrl: `${baseUrl}${img.src}`,
  }));
}

export { generatePortfolioHasPartSEO_Utils };
