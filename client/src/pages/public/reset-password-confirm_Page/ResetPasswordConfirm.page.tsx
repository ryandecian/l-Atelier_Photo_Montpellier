/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import ResetPasswordConfirmRoot from "../../../components/ppublic/ResetPasswordConfirmRoot/ResetPasswordConfirm";
import Footer_Layout from "../../../components/layout/footer/Footer.layout";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function ResetPasswordConfirm_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`ResetPasswordConfirm_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <ResetPasswordConfirmRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default ResetPasswordConfirm_Page;
