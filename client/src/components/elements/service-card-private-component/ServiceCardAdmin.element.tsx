/* Import des modules CSS */
import css from "./serviceCardAdmin.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/**
 * Documentation
 * 
 * Ce composant permet de créer un bouton cliquable dans l'interface admin pour un service
 */

type ServiceCardType = {
    nameService: string;
    etat: boolean;
    link?: string;
    onClick?: () => void;
};

function ServiceCardAdminLink_Element({ nameService, etat, link = "#" }: ServiceCardType) {
    return (
        <Link to={link} className={css.card}>
            <p className={css.title}>{nameService}</p>
            {etat ? (
                <p className={css.etatOn}>En ligne</p>
            ) : (
                <p className={css.etatOff}>Hors ligne</p>
            )}
        </Link>
    );
}

export { ServiceCardAdminLink_Element };

function ServiceCardAdminButton_Element({ nameService, etat, onClick }: ServiceCardType) {
    return (
        <button onClick={onClick} className={css.card}>
            <p className={css.title}>{nameService}</p>
            {etat ? (
                <p className={css.etatOn}>En ligne</p>
            ) : (
                <p className={css.etatOff}>Hors ligne</p>
            )}
        </button>
    )
}

export { ServiceCardAdminButton_Element };