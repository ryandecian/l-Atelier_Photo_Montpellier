/* Import des modules CSS */
import css from "./contact.module.css";
import style from "../../StyleRootComponent.module.css";

/* Import des composants React */
import { Mail, Phone } from "lucide-react";

/* Import des composants Router */
import routerExt from "../../../router/routerExt.router";

function Contact_Root() {
    return (
        <section className={`Contact_Root ${css.ContactRoot} ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Besoin d’un renseignement ? Contactez Kaleidopix`}
                </h1>
            </header>
            <p className={`${style.TextP3} ${css.Subtitle}`}>
                Une question ou un projet photo en tête ? Je suis à votre écoute pour échanger ou fixer un rendez-vous. <br />
                Chaque projet photo commence par une rencontre. Parlons de vos envies, sans engagement.
            </p>
            <div className={`${style.ContainerRoot} ${css.ContactContainer}`}>
                <a href={routerExt.emailKaleidopix} className={css.ContactItem}>
                    <Mail className={style.IconLucide} />
                    <span>as@kaleidopix.fr</span>
                </a>
                <a href={routerExt.phoneKaleidopix} className={css.ContactItem}>
                    <Phone className={style.IconLucide} />
                    <span>+33 6 52 67 73 33</span>
                </a>
            </div>
        </section>
    );
}

export default Contact_Root;
