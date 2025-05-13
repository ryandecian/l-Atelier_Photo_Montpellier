import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import ContactRoot from "../../components/ContactRoot/ContactRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_Contact_SEO from "../../seo/ContactSEO/Helmet_Contact.seo";

function ContactPage() {
     return (
        <section className={`ContactPage ${style.Page}`}>
            <Helmet_Contact_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <ContactRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default ContactPage;
