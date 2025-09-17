import style from "../../stylePage.module.css";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import PortraitCorporateRoot from "../../../components/Public/PortraitCorporateRoot/PortraitCorporateRoot";
import Footer from "../../../components/layout/footer/Footer.layout";
import Helmet_PortraitCorporate_SEO from "../../../seo/PortraitCorporateSEO/Helmet_PortraitCorporate.helmet.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function PortraitCorporatePage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section className={`CorporatePage ${style.Page}`}>
            <Helmet_PortraitCorporate_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitCorporateRoot />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </section>
    )
}

export default PortraitCorporatePage;
