import NavRoot from "../../components/NavRoot/NavRoot";
import style from "../stylePage.module.css";
import PortraitGrossesseRoot from "../../components/PortraitGrossesseRoot/PortraitGrossesseRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitGrossesse_SEO from "../../seo/PortraitGrossesseSEO/Helmet_PortraitGrossesse.seo";
import useScrollToHash from "../../hook/useScrollToHash";

function PortraitGrossessePage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitGrossessePage ${style.Page}`}>
            <Helmet_PortraitGrossesse_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitGrossesseRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortraitGrossessePage;
