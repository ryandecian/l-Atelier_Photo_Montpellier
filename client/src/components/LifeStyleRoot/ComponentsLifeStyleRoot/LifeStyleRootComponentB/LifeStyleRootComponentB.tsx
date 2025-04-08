import { Link } from "react-router-dom";
import css from "./LifeStyleRootComponentB.module.css";
import ListDataRouter from "../../../../router/router";
import ControllerDataImageLifeStyle from "../../ImagesLifeStyleControllerData";

function LifeStyleRootComponentB() {
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
        <div className={`LifeStyleRootComponentA ${css.container}`}>
            {services.map((service) => (
                <Link to={service.path} key={service.id} className={css.card} aria-label={`Voir le service ${service.title} : ${service.name}`}>
                    <img src={service.img} alt={service.name} className={css.image} />
                    <div className={css.overlay}></div>
                    <h3 className={css.title}>{service.title}</h3>
                    <p className={css.name}>{service.name}</p>
                </Link>
            ))}
        </div>
    );
}

export default LifeStyleRootComponentB;
