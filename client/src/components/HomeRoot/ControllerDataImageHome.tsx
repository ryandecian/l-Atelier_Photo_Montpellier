import Image1 from "../../assets/Images/ImageHomePage/Portrait_Studio_Corporate.jpg";
import Image2 from "../../assets/Images/ImageHomePage/Portrait_Pere_et_fils_LifeStyle.jpg";
import Image3 from "../../assets/Images/ImageHomePage/Portrait_jeune_femme_lumiere_naturelle.jpg";
import Image4 from "../../assets/Images/ImageHomePage/Shooting_couple_studio.jpg";

import Image5 from "../../assets/Images/ImageHomePage/Les_maries_vers_la_mairie.jpg";
import Image6 from "../../assets/Images/ImageHomePage/Portrait_Mariage_a_la_Tour_Magne.jpg";
import Image7 from "../../assets/Images/ImageHomePage/Photo_de_mariage_Sun_Glass.jpg";
import Image8 from "../../assets/Images/ImageHomePage/Pride_et_mariage.jpg";

interface ControllerDataImageHomeType {
    src: string;
    alt: string;
}

const ControllerDataImageHome: ControllerDataImageHomeType[] = [
    /* Tableau 1 d'images : 4 images */
    /* {ControllerDataImageHome[0].src} */
    {
        src: Image1,
        alt: "Portrait Studio Corporate",
    },
    /* {ControllerDataImageHome[1].src} */
    {
        src: Image2,
        alt: "Portrait Père et fils LifeStyle",
    },
    /* {ControllerDataImageHome[2].src} */
    {
        src: Image3,
        alt: "Portrait jeune femme lumière naturelle",
    },
    /* {ControllerDataImageHome[3].src} */
    {
        src: Image4,
        alt: "Shooting couple studio",
    },



    /* Tableau 2 d'images : 4 images */
    /* {ControllerDataImageHome[4].src} */
    {
        src: Image5,
        alt: "Les mariés vers la mairie",
    },
    /* {ControllerDataImageHome[5].src} */
    {
        src: Image6,
        alt: "Portrait Mariage à la Tour Magne",
    },
    /* {ControllerDataImageHome[6].src} */
    {
        src: Image7,
        alt: "Photo de mariage Sun Glass",
    },
    /* {ControllerDataImageHome[7].src} */
    {
        src: Image8,
        alt: "Pride et mariage",
    },
];

export default ControllerDataImageHome;