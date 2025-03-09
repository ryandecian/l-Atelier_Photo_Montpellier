import { Link } from "react-router-dom";
import style from "./LifeStyleRootComposantB.module.css";
import img1 from "../../../../assets/Images/ImageHomePage/HomeImg1.jpg";
import img2 from "../../../../assets/Images/ImageHomePage/HomeImg2.jpg";
import img3 from "../../../../assets/Images/ImageHomePage/HomeImg3.jpg";
import img4 from "../../../../assets/Images/ImageHomePage/HomeImg4.jpg";
import img5 from "../../../../assets/Images/ImageHomePage/HomeImg5.jpg";
import img6 from "../../../../assets/Images/ImageHomePage/HomeImg6.jpg";

const services = [
    { 
        id: 1, 
        title: "Passion Live", 
        name: "Portrait Hobbies", 
        path: "/portrait-hobbies", 
        img: img1 
    },
    { 
        id: 2, 
        title: "Moments Précieux", 
        name: "Séance Famille", 
        path: "/seance-famille", 
        img: img2 
    },
    { 
        id: 3, 
        title: "Style Unique", 
        name: "Mode & Lifestyle", 
        path: "/mode-lifestyle", 
        img: img3 
    },
    { 
        id: 4, 
        title: "Émotion Authentique", 
        name: "Mariage & Engagement", 
        path: "/mariage-engagement", 
        img: img4 
    },
    { 
        id: 5, title: "Instants Magiques", 
        name: "Grossesse & Bébé", 
        path: "/grossesse-bebe", 
        img: img5 
    },
    { 
        id: 6, 
        title: "Corporate & Pro", 
        name: "Portrait Professionnel", 
        path: "/portrait-pro", 
        img: img6 
    },
];

function LifeStyleRootComposantB() {
    return (
        <div className={style.container}>
            {services.map((service) => (
                <Link to={service.path} key={service.id} className={style.card}>
                    <img src={service.img} alt={service.name} className={style.image} loading="lazy" />
                    <div className={style.overlay}></div>
                    <div className={style.title}>{service.title}</div>
                    <div className={style.name}>{service.name}</div>
                </Link>
            ))}
        </div>
    );
}

export default LifeStyleRootComposantB;
