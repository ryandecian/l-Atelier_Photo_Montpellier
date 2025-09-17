import style from "../../stylePage.module.css";
import NavRoot from "../../../components/Llayout/NavRoot/NavRoot";
import ResetPasswordRoot from "../../../components/Public/ResetPasswordRoot/ResetPasswordRoot";
import FooterRoot from "../../../components/Llayout/footer/Footer.layout";
import Helmet_QuiSuisJe_SEO from "../../../seo/QuiSuisJeSEO/Helmet_QuiSuisJe.helmet.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function ResetPasswordPage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`ResetPasswordPage ${style.Page}`}>
            <Helmet_QuiSuisJe_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <ResetPasswordRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default ResetPasswordPage;
