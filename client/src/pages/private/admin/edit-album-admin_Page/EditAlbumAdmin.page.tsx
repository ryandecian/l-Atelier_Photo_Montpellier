/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import EditAlbumAdmin_Root from "../../../../components/private/admin/edit-album-admin/EditAlbumAdmin.root";
import Footer_root_layout from "../../../../components/layout/footer_Layout/Footer.root.layout";

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
                <Footer_root_layout />
            </footer>
        </section>
    );
}

export default EditAlbumAdmin_Page;
