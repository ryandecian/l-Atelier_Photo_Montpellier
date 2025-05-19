import ImagesControllerDataType from "../../types/ImagesControllerData.type";

import ImageAlbum_Test_1 from "../../assets/Images/ImagePortfolio/test/1-1_1.jpg";
import ImageAlbum_Test_2 from "../../assets/Images/ImagePortfolio/test/2-3_4-H.jpg";
import ImageAlbum_Test_3 from "../../assets/Images/ImagePortfolio/test/3-1_1.jpg";
import ImageAlbum_Test_4 from "../../assets/Images/ImagePortfolio/test/4-4_3-P.jpg";
import ImageAlbum_Test_5 from "../../assets/Images/ImagePortfolio/test/5-3_4-H.jpg";

type ListeAlbumType = {
    Album_Pro_Perso: ImagesControllerDataType[];
    Album_Paysage: ImagesControllerDataType[];
    Album_Rue_Street: ImagesControllerDataType[];
    Album_Urbaine: ImagesControllerDataType[];
    Album_Test: ImagesControllerDataType[];
}

const ImagesPortraitPortfolioControllerData: ListeAlbumType = {
    /* Portrait de particuliers et professionnels */
    Album_Pro_Perso: [
        {
            src: "",
            alt: "",
        }
    ],
    Album_Paysage: [
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
    ],
};

export default ImagesPortraitPortfolioControllerData;
