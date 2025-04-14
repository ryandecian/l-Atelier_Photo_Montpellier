import css from "./ContactRoot.module.css";
import style from "../StyleRootComponent.module.css";
import { Mail, Phone } from "lucide-react";

function ContactRoot() {
  return (
    <section className={`${css.ContactRoot} ${style.ContainerRootRacine}`}>
        <header className={style.ContainerTitle}>
            <h1 className={style.TitleH1}>Contactez-nous</h1>
        </header>
      <p className={`${style.TextP3} ${css.Subtitle}`}>
        Une question, une demande ou envie d’un shooting ? N’hésitez pas à nous écrire ou à nous appeler.
      </p>
      <div className={`${style.ContainerRoot} ${css.ContactContainer}`}>
        <a href="mailto:photo34000@gmail.com" className={css.ContactItem}>
          <Mail className={style.IconLucide} />
          <span>photo34000@gmail.com</span>
        </a>
        <a href="tel:+33652677333" className={css.ContactItem}>
          <Phone className={style.IconLucide} />
          <span>+33 6 52 67 73 33</span>
        </a>
      </div>
    </section>
  );
}

export default ContactRoot;
