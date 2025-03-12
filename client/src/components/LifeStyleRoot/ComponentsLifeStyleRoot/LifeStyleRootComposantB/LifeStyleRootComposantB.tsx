import { Link } from "react-router-dom";
import style from "./LifeStyleRootComposantB.module.css";
import ListDataRouter from "../../../../router/router";
import ControllerDataImageLifeStyle from "../../ControllerDataImageLifeStyle";

function LifeStyleRootComposantB() {
    const services = [
        { 
            id: 1, 
            title: "Feel Good", 
            name: "Portrait solo", 
            path: ListDataRouter[14].path, 
            img: ControllerDataImageLifeStyle[0].src
        },
        { 
            id: 2, 
            title: "Toi & Moi", 
            name: "Portrait couple", 
            path: ListDataRouter[15].path, 
            img: ControllerDataImageLifeStyle[1].src
        },
        { 
            id: 3, 
            title: "La Smala", 
            name: "Portrait famille - amis", 
            path: ListDataRouter[16].path, 
            img: ControllerDataImageLifeStyle[2].src
        },
        { 
            id: 4, 
            title: "1er cris", 
            name: "Portrait nouveaux nés", 
            path: ListDataRouter[17].path, 
            img: ControllerDataImageLifeStyle[3].src
        },
        { 
            id: 5, title: "9 mois", 
            name: "Portrait Grossesse", 
            path: ListDataRouter[18].path, 
            img: ControllerDataImageLifeStyle[4].src
        },
        { 
            id: 6, 
            title: "Passions Lives", 
            name: "Portrait Hobbies - Sport", 
            path: ListDataRouter[19].path, 
            img: ControllerDataImageLifeStyle[5].src
        },
    ];

    return (
        <div className={style.container}>
            {services.map((service) => (
                <Link to={service.path} key={service.id} className={style.card}>
                    <img src={service.img} alt={service.name} className={style.image} />
                    <div className={style.overlay}></div>
                    <div className={style.title}>{service.title}</div>
                    <div className={style.name}>{service.name}</div>
                </Link>
            ))}
        </div>
    );
}

export default LifeStyleRootComposantB;
