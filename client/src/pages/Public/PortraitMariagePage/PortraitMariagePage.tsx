import style from "../../stylePage.module.css";
import NavRoot from "../../../components/Llayout/NavRoot/NavRoot";
import PortraitMariageRoot from "../../../components/Public/PortraitMariageRoot/MariageRoot";
import FooterRoot from "../../../components/Llayout/footer/Footer.layout";
import Helmet_PortraitMariage_SEO from "../../../seo/PortraitMariageSEO/Helmet_PortraitMariage.helmet.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function PortraitMariagePage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <div className={`PortraitMariagePage ${style.Page}`}>
            <Helmet_PortraitMariage_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitMariageRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    )
}

export default PortraitMariagePage;
