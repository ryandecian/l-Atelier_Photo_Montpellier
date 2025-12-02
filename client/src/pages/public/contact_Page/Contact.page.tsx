/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import ContactRoot from "../../../components/Public/contact/Contact.root";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetContact_helmet_SEO } from "../../../seo/contact_SEO/HelmetContact.helmet.seo";

function Contact_Page() {
     return (
        <section className={`Contact_Page ${style.Page}`}>
            <HelmetContact_helmet_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <ContactRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Contact_Page;
