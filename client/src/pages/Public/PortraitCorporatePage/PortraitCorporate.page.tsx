/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import PortraitCorporateRoot from "../../../components/Public/PortraitCorporateRoot/PortraitCorporateRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { Helmet_PortraitCorporate_helmet_SEO } from "../../../seo/PortraitCorporateSEO/HelmetPortraitCorporate.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function PortraitCorporate_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section className={`CorporatePage ${style.Page}`}>
            <Helmet_PortraitCorporate_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitCorporateRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default PortraitCorporate_Page;
