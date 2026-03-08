/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import PortraitMariageRoot from "../../../components/public/portrait-mariage/PortraitMariage.root";
import Footer_Layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitMariage_helmet_SEO } from "../../../seo/portrait-mariage_SEO/HelmetPortraitMariage.helmet.seo";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../hook/useScrollToHash.hook";

function PortraitMariage_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <div className={`PortraitMariage_Page ${style.Page}`}>
            <HelmetPortraitMariage_helmet_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <PortraitMariageRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </div>
    )
}

export default PortraitMariage_Page;
