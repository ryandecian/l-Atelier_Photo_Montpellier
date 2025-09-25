import style from "../../stylePage.module.css";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import RegisterRoot from "../../../components/Public/RegisterRoot/RegisterRoot";
import Footer from "../../../components/layout/footer/Footer.layout";
import Helmet_QuiSuisJe_SEO from "../../../seo/QuiSuisJeSEO/HelmetQuiSuisJe.helmet.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function RegisterPage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`RegisterPage ${style.Page}`}>
            <Helmet_QuiSuisJe_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <RegisterRoot />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </section>
    )
}

export default RegisterPage;
