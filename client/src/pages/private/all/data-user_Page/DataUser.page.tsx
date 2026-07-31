/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import DataUser_Root from "../../../../components/private/all/data-user/DataUser.root";
import Footer_root_layout from "../../../../components/layout/footer_Layout/Footer.root.layout";

function DataUser_Page() {
    return (
        <div className={`DataUser_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <DataUser_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </div>
    );
}

export default DataUser_Page;
