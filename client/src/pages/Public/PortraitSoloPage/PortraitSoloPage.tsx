import style from "../../stylePage.module.css";
import NavRoot from "../../../components/NavRoot/NavRoot";
import PortraitSoloRoot from "../../../components/Public/PortraitSoloRoot/PortraitSoloRoot";
import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import Helmet_PortraitSolo_SEO from "../../../seo/PortraitSoloSEO/Helmet_PortraitSolo.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function PortraitSoloPage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitSoloPage ${style.Page}`}>
            <Helmet_PortraitSolo_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitSoloRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortraitSoloPage;
