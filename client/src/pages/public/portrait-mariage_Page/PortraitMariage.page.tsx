/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import PortraitMariageRoot from "../../../components/Public/portrait-mariage/MariageRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitMariage_helmet_SEO } from "../../../seo/portrait-mariage_SEO/HelmetPortraitMariage.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function PortraitMariage_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <div className={`PortraitMariagePage ${style.Page}`}>
            <HelmetPortraitMariage_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitMariageRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </div>
    )
}

export default PortraitMariage_Page;
