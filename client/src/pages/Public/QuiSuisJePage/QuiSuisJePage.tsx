import style from "../../stylePage.module.css";
import NavRoot from "../../../components/Layout/NavRoot/NavRoot";
import QuiSuisJeRoot from "../../../components/Public/QuiSuisJeRoot/QuiSuisJeRoot";
import FooterRoot from "../../../components/Layout/FooterRoot/FooterRoot";
import Helmet_QuiSuisJe_SEO from "../../../seo/QuiSuisJeSEO/Helmet_QuiSuisJe.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function QuiSuisJePage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`QuiSuisJePage ${style.Page}`}>
            <Helmet_QuiSuisJe_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <QuiSuisJeRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default QuiSuisJePage;
