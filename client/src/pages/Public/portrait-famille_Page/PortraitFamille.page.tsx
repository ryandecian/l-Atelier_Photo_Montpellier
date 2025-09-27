/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import PortraitFamilleRoot from "../../../components/Public/PortraitFamilleRoot/PortraitFamilleRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitFamille_helmet_SEO } from "../../../seo/PortraitFamilleSEO/HelmetPortraitFamille.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function PortraitFamille_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitFamille_Page ${style.Page}`}>
            <HelmetPortraitFamille_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitFamilleRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default PortraitFamille_Page;
