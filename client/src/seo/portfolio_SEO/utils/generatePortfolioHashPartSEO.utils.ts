import AlbumPortfolio from "../../../components/Public/PortfolioRoot/AlbumPortfolio";

/**
 * Génère un tableau d’objets JSON-LD de type "ImageObject" à partir 
 * d’une sélection d’images du portfolio. 
 * Sert à enrichir le SEO en décrivant explicitement, via la propriété 
 * "hasPart", certaines images représentatives du portfolio.
 */

function generatePortfolioHasPartSEO_Utils() {
  const baseUrl = import.meta.env.VITE_DOMAIN_CLIENT;

  const selectedImages = [
    AlbumPortfolio.Album_Paysage[0],
    AlbumPortfolio.Album_Paysage[1],
    AlbumPortfolio.Album_Rue_Street[0],
    AlbumPortfolio.Album_Rue_Street[1],
    AlbumPortfolio.Album_Urbaine[0],
    AlbumPortfolio.Album_Pro_Perso[0],
  ];

  return selectedImages.map((img) => ({
    "@type": "ImageObject",
    name: img.alt,
    contentUrl: `${baseUrl}${img.src}`,
  }));
}

export { generatePortfolioHasPartSEO_Utils };
