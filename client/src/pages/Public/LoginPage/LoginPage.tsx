import style from "../../stylePage.module.css";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import LoginRoot from "../../../components/Public/LoginRoot/LoginRoot";
import Footer from "../../../components/layout/footer/Footer.layout";

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
                <Footer />
            </footer>
        </div>
    );
}

export default LoginPage;
