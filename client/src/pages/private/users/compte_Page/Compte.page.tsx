/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import Compte_Root from "../../../../components/private/users/compte/Compte.root";
import Footer from "../../../../components/layout/footer_Layout/Footer.layout";

function Compte_Page() {
    return (
        <div className={`Compte_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <Compte_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default Compte_Page;
