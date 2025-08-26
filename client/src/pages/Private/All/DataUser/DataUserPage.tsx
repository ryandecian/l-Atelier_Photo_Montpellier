import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/Layout/NavRoot/NavRoot";
import DataUserRoot from "../../../../components/Private/Users/UserRoot/UserRoot";
import FooterRoot from "../../../../components/Layout/FooterRoot/FooterRoot";

function DataUserPage() {
    return (
        <div className={`DataUserPage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <DataUserRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    );
}

export default DataUserPage;
