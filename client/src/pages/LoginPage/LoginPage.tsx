import style from "./LoginPage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import LoginRoot from "../../components/LoginRoot/LoginRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";

function LoginPage() {
    return (
        <div className={style.LoginPage}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <LoginRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    );
}

export default LoginPage;
