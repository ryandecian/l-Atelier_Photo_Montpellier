import { Link } from "react-router-dom";
/* Dépendance du css du composant B de la page Portrait LifeStyle */
import css from "../../../PortraitLifeStyleRoot/ComponentsPortraitLifeStyleRoot/PortraitLifeStyleRootComponentB/PortraitLifeStyleRootComponentB.module.css";

import ListDataRouter from "../../../../router/router";

/* Dépendance du controller data image de la page Portrait LifeStyle */
import ImagesPortraitLifeStyleControllerData from "../../../PortraitLifeStyleRoot/ImagesPortraitLifeStyleControllerData";

function CardPortraitLifeStyle() {
    const services = [
        { 
            id: 1, 
            title: "Feel Good", 
            name: "Portrait solo", 
            path: `${ListDataRouter[14].path}#tarifs-portrait-solo`, 
            img: ImagesPortraitLifeStyleControllerData[0].src
        },
        { 
            id: 2, 
            title: "Toi & Moi", 
            name: "Portrait couple", 
            path: `${ListDataRouter[15].path}#tarifs-portrait-duo`, 
            img: ImagesPortraitLifeStyleControllerData[1].src
        },
        { 
            id: 3, 
            title: "La Smala", 
            name: "Portrait famille - amis", 
            path: `${ListDataRouter[16].path}#tarifs-portrait-famille`, 
            img: ImagesPortraitLifeStyleControllerData[2].src
        },
        { 
            id: 4, 
            title: "1er cris", 
            name: "Portrait nouveaux nés", 
            path: `${ListDataRouter[17].path}#tarifs-portrait-grossesse`, 
            img: ImagesPortraitLifeStyleControllerData[3].src
        },
        { 
            id: 5, title: "9 mois", 
            name: "Portrait Grossesse", 
            path: `${ListDataRouter[18].path}#tarifs-portrait-grossesse`, 
            img: ImagesPortraitLifeStyleControllerData[4].src
        },
        { 
            id: 6, 
            title: "Passions Lives", 
            name: "Portrait Hobby - Sport", 
            path: `${ListDataRouter[19].path}#tarifs-portrait-hobby`, 
            img: ImagesPortraitLifeStyleControllerData[5].src
        },
    ];

    return (
        <div className={`PortraitLifeStyleRootComponentA ${css.container}`}>
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

export default CardPortraitLifeStyle;
