/* Import des modules CSS */
import css from "./serviceCardAdmin.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/**
 * Documentation
 * 
 * Ce composant permet de créer un bouton cliquable dans l'interface User pour un service
 */

type ServiceCardType = {
    nameService: string;
    link?: string;
    onClick?: () => void;
};

function ServiceCardUserLink_Element({ nameService, link = "#" }: ServiceCardType) {
    return (
        <Link to={link} className={css.card}>
            <p className={css.title}>{nameService}</p>
        </Link>
    );
}

export { ServiceCardUserLink_Element };

function ServiceCardUserButton_Element({ nameService, onClick }: ServiceCardType) {
    return (
        <button onClick={onClick} className={css.cardLogout}>
            <p className={css.title}>{nameService}</p>
        </button>
    )
}

export { ServiceCardUserButton_Element };
