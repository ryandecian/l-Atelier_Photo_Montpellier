import ImagesPortraitDuoControllerData from "./ImagesPortraitDuoControllerData";
import ImagesPortfolioControllerData from "./ImagesPortfolioControllerData";

export const sitemapPages = [
  {
    path: "/",
    priority: "1.0",
    lastmod: "2025-06-26",
    images: [],
  },
  {
    path: "/portfolio",
    priority: "0.9",
    lastmod: "2025-06-26",
    images: ImagesPortfolioControllerData,
  },
  {
    path: "/portrait-duo",
    priority: "0.8",
    lastmod: "2025-06-26",
    images: ImagesPortraitDuoControllerData,
  },
  {
    path: "/portrait-grossesse",
    priority: "0.8",
    lastmod: "2025-06-26",
    images: [], // à remplir plus tard
  },
];
