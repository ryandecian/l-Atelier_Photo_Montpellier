import style from "../../stylePage.module.css";
import NavRoot from "../../../components/Llayout/NavRoot/NavRoot";
import LoginRoot from "../../../components/Public/LoginRoot/LoginRoot";
import FooterRoot from "../../../components/Llayout/footer/Footer.layout";

function LoginPage() {
    return (
        <div className={`LoginPage ${style.Page}`}>
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
