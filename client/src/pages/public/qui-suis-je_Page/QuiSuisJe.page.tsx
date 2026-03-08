/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import QuiSuisJe_Root from "../../../components/public/qui-suis-je/QuiSuisJe.root";
import Footer_Layout from "../../../components/layout/footer_Layout/Footer.layout";

/* Import des composants SEO */
import { HelmetQuiSuisJe_helmet_SEO } from "../../../seo/qui-suis-je_SEO/HelmetQuiSuisJe.helmet.seo";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../hook/useScrollToHash.hook";

function QuiSuisJe_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`QuiSuisJe_Page ${style.Page}`}>
            <HelmetQuiSuisJe_helmet_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <QuiSuisJe_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default QuiSuisJe_Page;
