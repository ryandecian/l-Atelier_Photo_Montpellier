import { Link } from "react-router-dom";
import css from "./ServiceCardComponent.module.css";

/**
 * Documentation
 * 
 * Ce composant permet de créer un bouton cliquable dans l'interface admin pour un service
 */

type ServiceCardType = {
    nameService: string;
    etat: boolean;
    link?: string;

}

function ServiceCardComponent({nameService, etat, link = "#"}: ServiceCardType) {
  return (
    <Link to={link}className={css.card}>
      <p className={css.title}>{nameService}</p>
      {etat ? 
      <p className={css.etatOn}>En ligne</p>
      : 
      <p className={css.etatOff}>Hors ligne</p>
      }
    </Link>
  );
}

export default ServiceCardComponent;
