import { Link } from "react-router-dom";
import style from "./LifeStyleRootComposantB.module.css";
import ListDataRouter from "../../../../router/router";

import img1 from "../../../../assets/Images/ImageLifeStyle/LifeStyleImg1.jpg";
import img2 from "../../../../assets/Images/ImageLifeStyle/LifeStyleImg2.jpg";
import img3 from "../../../../assets/Images/ImageLifeStyle/LifeStyleImg3.jpg";
import img4 from "../../../../assets/Images/ImageLifeStyle/LifeStyleImg4.jpg";
import img5 from "../../../../assets/Images/ImageLifeStyle/LifeStyleImg5.jpg";
import img6 from "../../../../assets/Images/ImageLifeStyle/LifeStyleImg6.jpg";


function LifeStyleRootComposantB() {
    const services = [
        { 
            id: 1, 
            title: "Feel Good", 
            name: "Portrait solo", 
            path: ListDataRouter[14].path, 
            img: img1 
        },
        { 
            id: 2, 
            title: "Toi & Moi", 
            name: "Portrait couple", 
            path: ListDataRouter[15].path, 
            img: img2 
        },
        { 
            id: 3, 
            title: "La Smala", 
            name: "Portrait famille - amis", 
            path: ListDataRouter[16].path, 
            img: img3 
        },
        { 
            id: 4, 
            title: "1er cris", 
            name: "Portrait nouveaux nés", 
            path: ListDataRouter[17].path, 
            img: img4 
        },
        { 
            id: 5, title: "9 mois", 
            name: "Portrait Grossesse", 
            path: ListDataRouter[18].path, 
            img: img5 
        },
        { 
            id: 6, 
            title: "Passions Lives", 
            name: "Portrait Hobbies - Sport", 
            path: ListDataRouter[19].path, 
            img: img6 
        },
    ];
    
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
