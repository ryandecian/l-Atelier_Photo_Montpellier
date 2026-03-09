import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import DataUserRoot from "../../../../components/private/Alls/DataUserRoot/DataUserRoot";
import Footer from "../../../../components/layout/footer_Layout/Footer.layout";

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
