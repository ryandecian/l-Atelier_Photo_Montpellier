/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import PortraitLifeStyleRoot from "../../../components/Public/portrait-lifestyle/PortraitLifeStyleRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitLifeStyle_helmet_SEO } from "../../../seo/portrait-lifestyle_SEO/HelmetPortraitLifeStyle.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function PortraitLifeStyl_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <div className={`PortraitLifeStylePage ${style.Page}`}>
            <HelmetPortraitLifeStyle_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitLifeStyleRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </div>
    )
}

export default PortraitLifeStyl_Page;
