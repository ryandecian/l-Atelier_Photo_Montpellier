import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import PortraitDuoRoot from "../../components/PortraitDuoRoot/PortraitDuoRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitDuo_SEO from "../../seo/PortraitDuoSEO/Helmet_PortraitDuo.seo";
import useScrollToHash from "../../hook/useScrollToHash";

function PortraitDuoPage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitDuo ${style.Page}`}>
            <Helmet_PortraitDuo_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitDuoRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortraitDuoPage;
