/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import InsertAlbumAdmin_Root from "../../../../components/privates/admin/insert-album-admin/InsertAlbumAdmin.root";
import Footer from "../../../../components/layout/footer/Footer.layout";

function InsertAlbumAdmin_Page() {
    return (
        <div className={`InsertAlbumAdmin_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <InsertAlbumAdmin_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default InsertAlbumAdmin_Page;
