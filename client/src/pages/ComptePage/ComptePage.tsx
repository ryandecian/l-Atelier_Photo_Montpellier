import style from "../stylePage.module.css";
import NavRoot from "../../components/Layout/NavRoot/NavRoot";
import CompteRoot from "../../components/CompteRoot/CompteRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";

function ComptePage() {
    return (
        <div className={`ComptePage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <CompteRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    );
}

export default ComptePage;
