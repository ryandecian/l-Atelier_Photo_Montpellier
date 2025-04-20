import Image1 from "../../assets/Images/ImageHomePage/Portrait-Studio-Corporate.jpg";
import Image2 from "../../assets/Images/ImageHomePage/Portrait-Pere-et-fils-LifeStyle.jpg";
import Image3 from "../../assets/Images/ImageHomePage/Portrait-jeune-femme-lumiere-naturelle.jpg";
import Image4 from "../../assets/Images/ImageHomePage/Shooting-couple-studio.jpg";

import Image5 from "../../assets/Images/ImageHomePage/Les-maries-vers-la-mairie.jpg";
import Image6 from "../../assets/Images/ImageHomePage/Maries-parc-tour-magne.jpg";
import Image7 from "../../assets/Images/ImageHomePage/Photo-de-mariage-Sun-Glass.jpg";
import Image8 from "../../assets/Images/ImageHomePage/Pride-et-mariage.jpg";

interface ImagesHomeControllerDataType {
    src: string;
    alt: string;
}

const ImagesHomeControllerData: ImagesHomeControllerDataType[] = [
    /* Tableau 1 d'images : 4 images */
    /* {ImagesHomeControllerData[0].src} */
    {
        src: Image1,
        alt: "Portrait Studio Corporate",
    },
    /* {ImagesHomeControllerData[1].src} */
    {
        src: Image2,
        alt: "Portrait Père et fils LifeStyle",
    },
    /* {ImagesHomeControllerData[2].src} */
    {
        src: Image3,
        alt: "Portrait jeune femme lumière naturelle",
    },
    /* {ImagesHomeControllerData[3].src} */
    {
        src: Image4,
        alt: "Shooting couple studio",
    },



    /* Tableau 2 d'images : 4 images */
    /* {ImagesHomeControllerData[4].src} */
    {
        src: Image5,
        alt: "Les mariés vers la mairie",
    },
    /* {ImagesHomeControllerData[5].src} */
    {
        src: Image6,
        alt: "Mariés parc tour magne",
    },
    /* {ImagesHomeControllerData[6].src} */
    {
        src: Image7,
        alt: "Photo de mariage Sun Glass",
    },
    /* {ImagesHomeControllerData[7].src} */
    {
        src: Image8,
        alt: "Pride et mariage",
    },
];

export default ImagesHomeControllerData;