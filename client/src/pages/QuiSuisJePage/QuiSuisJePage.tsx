import NavRoot from "../../components/NavRoot/NavRoot";
import style from "../stylePage.module.css";
import QuiSuisJeRoot from "../../components/QuiSuisJeRoot/QuiSuisJeRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_QuiSuisJe_SEO from "../../seo/QuiSuisJeSEO/Helmet_QuiSuisJe.seo";

function QuiSuisJePage() {
     return (
        <section className={`QuiSuisJePage ${style.Page}`}>
            <Helmet_QuiSuisJe_SEO />
            <header className={style.Header}>
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
