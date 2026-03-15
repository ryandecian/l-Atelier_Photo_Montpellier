/* Import des modules CSS */
import css from "./portraitLifeStyleA.module.css";

/* Import des Components de Data */
import { imagesPortraitLifeStyle_Data } from "../imagesPortraitLifeStyle.data";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants Router */
import router from "../../../../router/router";

function PortraitLifeStyleA_Component() {
    const services = [
        { 
            id: 1, 
            title: "Feel Good", 
            name: "Portrait solo", 
            path: `${router[14].path}#top`, 
            img: imagesPortraitLifeStyle_Data[0].src
        },
        { 
            id: 2, 
            title: "Toi & Moi", 
            name: "Portrait couple", 
            path: `${router[15].path}#top`, 
            img: imagesPortraitLifeStyle_Data[1].src
        },
        { 
            id: 3, 
            title: "La Smala", 
            name: "Portrait famille - amis", 
            path: `${router[16].path}#top`, 
            img: imagesPortraitLifeStyle_Data[2].src
        },
        { 
            id: 4, 
            title: "1er cris", 
            name: "Portrait nouveaux nés", 
            path: `${router[17].path}#top`, 
            img: imagesPortraitLifeStyle_Data[3].src
        },
        { 
            id: 5, title: "9 mois", 
            name: "Portrait Grossesse", 
            path: `${router[18].path}#top`, 
            img: imagesPortraitLifeStyle_Data[4].src
        },
        { 
            id: 6, 
            title: "Passions Lives", 
            name: "Portrait Hobby - Sport", 
            path: `${router[19].path}#top`, 
            img: imagesPortraitLifeStyle_Data[5].src
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

export { PortraitLifeStyleA_Component };
