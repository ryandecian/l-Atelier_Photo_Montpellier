/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import PortraitLifeStyle_Root from "../../../components/public/portrait-lifestyle/PortraitLifeStyle.root";
import Footer_root_layout from "../../../components/layout/footer_Layout/Footer.root.layout";

/* Import des composants SEO */
import PortraitLifeStyle_root_SEO from "../../../seo/seo-pages/lifeStyle_SEO/PortraitLifeStyle.root.seo";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../hook/useScrollToHash.hook";

function PortraitLifeStyle_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <div className={`PortraitLifeStyle_Page ${style.Page}`}>
            <PortraitLifeStyle_root_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <PortraitLifeStyle_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </div>
    )
}

export default PortraitLifeStyle_Page;
