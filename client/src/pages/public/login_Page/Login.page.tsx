/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import LoginRoot from "../../../components/Public/LoginRoot/LoginRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

function Login_Page() {
    return (
        <div className={`Login_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <LoginRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </div>
    );
}

export default Login_Page;
