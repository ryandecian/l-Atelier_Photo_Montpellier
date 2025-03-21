import style from "./ComptePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import CompteRoot from "../../components/CompteRoot/CompteRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";

function ComptePage() {
    return (
        <div className={style.ComptePage}>
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
