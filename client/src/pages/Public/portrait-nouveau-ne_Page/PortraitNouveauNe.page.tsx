/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import PortraitGrossesseRoot from "../../../components/Public/PortraitGrossesseRoot/PortraitGrossesseRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitGrossesse_helmet_SEO } from "../../../seo/PortraitGrossesseSEO/HelmetPortraitGrossesse.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

/* Cette page reprend la quasi totalité des éléments éléments et composant de la page Portrait Grossesse */

function PortraitNouveauNe_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitNouveauNePage ${style.Page}`}>
            <HelmetPortraitGrossesse_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitGrossesseRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default PortraitNouveauNe_Page;
