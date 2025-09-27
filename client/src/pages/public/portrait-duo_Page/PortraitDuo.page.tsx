/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import PortraitDuoRoot from "../../../components/Public/PortraitDuoRoot/PortraitDuoRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitDuo_helmet_SEO } from "../../../seo/portrait-duo_SEO/HelmetPortraitDuo.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function PortraitDuo_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitDuo_Page ${style.Page}`}>
            <HelmetPortraitDuo_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitDuoRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default PortraitDuo_Page;
