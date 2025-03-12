import Image1 from "../../assets/Images/ImageHomePage/Portrait_Studio_Corporate.jpg";
import Image2 from "../../assets/Images/ImageHomePage/Portrait_Pere_et_fils_LifeStyle.jpg";
import Image3 from "../../assets/Images/ImageHomePage/Portrait_jeune_femme_lumiere_naturelle.jpg";
import Image4 from "../../assets/Images/ImageHomePage/Shooting_couple_studio.jpg";

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
        src: "./",
        alt: "",
    },
    /* {ControllerDataImageHome[5].src} */
    {
        src: "",
        alt: "",
    },
    /* {ControllerDataImageHome[6].src} */
    {
        src: "",
        alt: "",
    },
    /* {ControllerDataImageHome[7].src} */
    {
        src: "",
        alt: "",
    },
];

export default ControllerDataImageHome;