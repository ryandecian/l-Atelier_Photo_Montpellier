import style from "../../stylePage.module.css";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import ResetPasswordConfirmRoot from "../../../components/Public/ResetPasswordConfirmRoot/ResetPasswordConfirm";
import FooterRoot from "../../../components/layout/footer/Footer.layout";
import Helmet_QuiSuisJe_SEO from "../../../seo/QuiSuisJeSEO/Helmet_QuiSuisJe.helmet.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function ResetPasswordConfirmPage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`ResetPasswordPage ${style.Page}`}>
            <Helmet_QuiSuisJe_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <ResetPasswordConfirmRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default ResetPasswordConfirmPage;
