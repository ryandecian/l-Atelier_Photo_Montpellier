/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import Contact_Root from "../../../components/public/contact/Contact.root";
import Footer_root_layout from "../../../components/layout/footer_Layout/Footer.root.layout";

function Contact_Page() {
     return (
        <section className={`Contact_Page ${style.Page}`}>
            <header id="top" className={style.HeaderHomePage}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Contact_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    )
}

export default Contact_Page;
