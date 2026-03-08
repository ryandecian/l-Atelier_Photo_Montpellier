/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import PortraitGrossesseRoot from "../../../components/public/portrait-grossesse/PortraitGrossesseRoot";
import Footer_Layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitGrossesse_helmet_SEO } from "../../../seo/portrait-grossesse_SEO/HelmetPortraitGrossesse.helmet.seo";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../hook/useScrollToHash.hook";

function PortraitGrossesse_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitGrossessePage ${style.Page}`}>
            <HelmetPortraitGrossesse_helmet_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <PortraitGrossesseRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default PortraitGrossesse_Page;
