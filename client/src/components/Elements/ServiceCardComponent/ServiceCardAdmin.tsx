import { Link } from "react-router-dom";
import css from "./ServiceCardAdmin.module.css";

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

function ServiceCardAdminLink({ nameService, etat, link = "#" }: ServiceCardType) {
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

export { ServiceCardAdminLink };

function ServiceCardAdminButton({ nameService, etat, onClick }: ServiceCardType) {
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

export { ServiceCardAdminButton }