import style from "../../StyleRootComponent.module.css";
import css from "./ContactRoot.module.css";
import { Mail, Phone } from "lucide-react";
import externalLinks from "../../../constants/externalLinks";

function ContactRoot() {
    return (
        <section className={`ContactRoot ${css.ContactRoot} ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Besoin d’un renseignement ? Contactez l’Atelier Photo Montpellier`}
                </h1>
            </header>
            <p className={`${style.TextP3} ${css.Subtitle}`}>
                Une question ou un projet photo en tête ? Je suis à votre écoute pour échanger ou fixer un rendez-vous. <br />
                Chaque projet photo commence par une rencontre. Parlons de vos envies, sans engagement.
            </p>
            <div className={`${style.ContainerRoot} ${css.ContactContainer}`}>
                <a href={externalLinks.emailAnne} className={css.ContactItem}>
                    <Mail className={style.IconLucide} />
                    <span>photo34000@gmail.com</span>
                </a>
                <a href={externalLinks.phoneAnne} className={css.ContactItem}>
                    <Phone className={style.IconLucide} />
                    <span>+33 6 52 67 73 33</span>
                </a>
            </div>
        </section>
    );
}

export default ContactRoot;
