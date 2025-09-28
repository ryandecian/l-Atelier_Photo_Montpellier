import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import CompteRoot from "../../../../components/Private/Users/CompteRoot/CompteRoot";
import Footer from "../../../../components/layout/footer/Footer.layout";

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
                <Footer />
            </footer>
        </div>
    );
}

export default ComptePage;
