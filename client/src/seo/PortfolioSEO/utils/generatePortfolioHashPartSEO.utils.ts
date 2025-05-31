import AlbumPortfolio from "../../../components/PortfolioRoot/AlbumPortfolio";

export default function generatePortfolioHasPartSEO() {
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
