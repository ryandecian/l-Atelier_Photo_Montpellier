import style from "../../stylePage.module.css";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import PortraitGrossesseRoot from "../../../components/Public/PortraitGrossesseRoot/PortraitGrossesseRoot";
import Footer from "../../../components/layout/footer/Footer.layout";
import Helmet_PortraitGrossesse_SEO from "../../../seo/PortraitGrossesseSEO/Helmet_PortraitGrossesse.helmet.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

/* Cette page reprend la quasi totalité des éléments éléments et composant de la page Portrait Grossesse */

function PortraitNouveauNePage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitNouveauNePage ${style.Page}`}>
            <Helmet_PortraitGrossesse_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitGrossesseRoot />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </section>
    )
}

export default PortraitNouveauNePage;
