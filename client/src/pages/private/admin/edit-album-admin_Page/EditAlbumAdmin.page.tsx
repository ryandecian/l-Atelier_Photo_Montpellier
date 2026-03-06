/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import EditAlbumAdmin_Root from "../../../../components/Private/admina/edit-album-admin/EditAlbumAdmin.root";
import Footer from "../../../../components/layout/footer/Footer.layout";

function EditAlbumAdmin_Page() {
    return (
        <section className={`EditAlbumAdmin_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <EditAlbumAdmin_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </section>
    );
}

export default EditAlbumAdmin_Page;
