import ImagesControllerDataType from "../../types/ImagesControllerData.type";

import ImageAlbum_Test_1 from "../../assets/Images/ImagePortfolio/test/1-1_1.jpg";
import ImageAlbum_Test_2 from "../../assets/Images/ImagePortfolio/test/2-3_4-H.jpg";
import ImageAlbum_Test_3 from "../../assets/Images/ImagePortfolio/test/3-1_1.jpg";
import ImageAlbum_Test_4 from "../../assets/Images/ImagePortfolio/test/4-4_3-P.jpg";
import ImageAlbum_Test_5 from "../../assets/Images/ImagePortfolio/test/5-3_4-H.jpg";

const data_Album_Paysage = [
    "lapm-photographie-professionnelle-depart-ou-arrivee-tage-paysage-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-flamands-camargue-dos-a-dos-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-flamands-camargue-mimetisme-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-brume-chemin-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-brume-matinale-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-camargue-envols-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-camargue-sunset-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-cap-breton-bunkers-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-chateau-roche-posay-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-flamand-camargue-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-heure-bleue-meze-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-immensité-sable-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-jetee-cap-breton-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-lac-salagou-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-remparts-aigues-mortes-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-immensité-sable-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-jetee-cap-breton-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-lac-salagou-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-remparts-aigues-mortes-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-salins-aigues-mortes-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-paysage-sunset-flamands-l-atelier-photo-montpellier.jpg",
    "lapm-photographie-professionnelle-printemps-nature-coquelicot-l-atelier-photo-montpellier.jpg"
];

type ListeAlbumType = {
    Album_Pro_Perso: ImagesControllerDataType[];
    Album_Paysage: ImagesControllerDataType[];
    Album_Rue_Street: ImagesControllerDataType[];
    Album_Urbaine: ImagesControllerDataType[];
    Album_Test: ImagesControllerDataType[];
}

function generateAltFromFilename(filename: string): string {
  return filename
    .replace(/\.[^/.]+$/, '')            // Supprime l'extension (.jpg, .webp...)
    .replace(/[-_]/g, ' ')               // Remplace - et _ par des espaces
    .replace(/\s+/g, ' ')                // Supprime les doubles espaces
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase()); // Majuscule en début
}

function GenerateTableImg(nbImg: number, basePath: string, allFileNames: string[]
): ImagesControllerDataType[] {
  const shuffled = [...allFileNames].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, nbImg);

  return selected.map((filename) => ({
    src: `${basePath}${filename}`,
    alt: generateAltFromFilename(filename),
  }));
}

const Album_Paysage = GenerateTableImg(10, "/images/image-portfolio/album-paysage/", data_Album_Paysage);

const ImagesPortraitPortfolioControllerData: ListeAlbumType = {
    /* Portrait de particuliers et professionnels */
    Album_Paysage,
    Album_Pro_Perso: [
        {
            src: "",
            alt: "",
        }
    ],
    Album_Rue_Street: [
        {
            src: "",
            alt: "",
        }
    ],
    Album_Urbaine: [
        {
            src: "",
            alt: "",
        }
    ],
    Album_Test: [
        {
            src: ImageAlbum_Test_1,
            alt: "",
        },
        {
            src: ImageAlbum_Test_2,
            alt: "",
        },
        {
            src: ImageAlbum_Test_3,
            alt: "",
        },
        {
            src: ImageAlbum_Test_2,
            alt: "",
        },
        {
            src: ImageAlbum_Test_3,
            alt: "",
        },
        {
            src: ImageAlbum_Test_4,
            alt: "",
        },
        {
            src: ImageAlbum_Test_5,
            alt: "",
        },
        {
            src: ImageAlbum_Test_3,
            alt: "",
        },
        {
            src: ImageAlbum_Test_2,
            alt: "",
        },
        {
            src: ImageAlbum_Test_3,
            alt: "",
        },
        {
            src: ImageAlbum_Test_4,
            alt: "",
        },
        {
            src: ImageAlbum_Test_5,
            alt: "",
        },
    ],
};

export default ImagesPortraitPortfolioControllerData;
