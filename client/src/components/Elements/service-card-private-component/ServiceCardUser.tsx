import { Link } from "react-router-dom";
import css from "./ServiceCardUser.module.css";

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

function ServiceCardUserLink({ nameService, link = "#" }: ServiceCardType) {
    return (
        <Link to={link} className={css.card}>
            <p className={css.title}>{nameService}</p>
        </Link>
    );
}

export { ServiceCardUserLink };

function ServiceCardUserButton({ nameService, onClick }: ServiceCardType) {
    return (
        <button onClick={onClick} className={css.cardLogout}>
            <p className={css.title}>{nameService}</p>
        </button>
    )
}

export { ServiceCardUserButton }