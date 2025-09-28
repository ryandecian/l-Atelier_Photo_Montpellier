import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import DataUserRoot from "../../../../components/Private/All/DataUserRoot/DataUserRoot";
import Footer from "../../../../components/layout/footer/Footer.layout";

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
                <Footer />
            </footer>
        </div>
    );
}

export default DataUserPage;
