/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import ContactRoot from "../../../components/public/contact/Contact.root";
import Footer_root_layout from "../../../components/layout/footer_Layout/Footer.root.layout";

/* Import des composants SEO */
import { HelmetContact_helmet_SEO } from "../../../seoS/contact_SEO/HelmetContact.helmet.seo";

function Contact_Page() {
     return (
        <section className={`Contact_Page ${style.Page}`}>
            <HelmetContact_helmet_SEO />
            <header className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <ContactRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    )
}

export default Contact_Page;
