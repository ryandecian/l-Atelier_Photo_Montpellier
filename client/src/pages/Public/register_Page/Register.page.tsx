/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import RegisterRoot from "../../../components/Public/RegisterRoot/RegisterRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function Register_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`Register_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <RegisterRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Register_Page;
