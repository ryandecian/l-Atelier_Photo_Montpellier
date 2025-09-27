/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import PortraitSoloRoot from "../../../components/Public/PortraitSoloRoot/PortraitSoloRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitSolo_helmet_SEO } from "../../../seo/portrait-solo_SEO/HelmetPortraitSolo.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function PortraitSolo_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitSoloPage ${style.Page}`}>
            <HelmetPortraitSolo_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitSoloRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default PortraitSolo_Page;
