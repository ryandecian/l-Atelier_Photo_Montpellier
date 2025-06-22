import NavRoot from "../../components/NavRoot/NavRoot";
import style from "../stylePage.module.css";
import PortraitCorporateRoot from "../../components/PortraitCorporateRoot/PortraitCorporateRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitCorporate_SEO from "../../seo/PortraitCorporateSEO/Helmet_PortraitCorporate.seo";
import useScrollToHash from "../../hook/useScrollToHash";

function PortraitCorporatePage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section className={`CorporatePage ${style.Page}`}>
            <Helmet_PortraitCorporate_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitCorporateRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortraitCorporatePage;
