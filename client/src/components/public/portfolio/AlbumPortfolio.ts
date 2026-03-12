import { imagesPortfolio_Data } from "./imagesPortfolio.data";

/* Ce composant a pour objectif d'éviter d'exécuter systématiquement ImagesPortraitPortfolioControllerData à chaque import */
/* Cela permet une éco-conception et une économie de mise en mémoire */

const AlbumPortfolio = imagesPortfolio_Data;

export default AlbumPortfolio;
