/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import LoginRoot from "../../../components/public/login/Login.root";
import Footer_Layout from "../../../components/layout/footer_Layout/Footer.layout";

function Login_Page() {
    return (
        <div className={`Login_Page ${style.Page}`}>
            <header className={style.Header}>
                <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <LoginRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </div>
    );
}

export default Login_Page;
