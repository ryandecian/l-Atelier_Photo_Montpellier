import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import PortfolioRoot from "../../components/PortfolioRoot/PortfolioRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitDuo_SEO from "../../seo/PortraitDuoSEO/Helmet_PortraitDuo.seo";
import useScrollToHash from "../../hook/useScrollToHash";

function PortfolioPage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`Portfolio ${style.Page}`}>
            <Helmet_PortraitDuo_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortfolioRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortfolioPage;
