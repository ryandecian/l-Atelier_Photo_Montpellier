/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import ResetPasswordRoot from "../../../components/public/ResetPasswordRoot/ResetPasswordRoot";
import Footer_Layout from "../../../components/layout/footer/Footer.layout";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../hook/useScrollToHash.hook";

function ResetPassword_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`ResetPassword_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <ResetPasswordRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default ResetPassword_Page;
