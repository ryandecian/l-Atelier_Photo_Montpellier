/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import AdminGestionAlbum_Root from "../../../../components/Private/Admin/admin-gestion-album/AdminGestionAlbum.root";
import Footer from "../../../../components/layout/footer/Footer.layout";

function AdminGestionAlbum_Page() {
    return (
        <section className={`AdminGestionAlbum_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <AdminGestionAlbum_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </section>
    );
}

export default AdminGestionAlbum_Page;
