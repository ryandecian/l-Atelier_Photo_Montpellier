import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/Layout/NavRoot/NavRoot";
import AdminGestionAlbumRoot from "../../../../components/Private/Admin/AdminGestionAlbumRoot/AdminGestionAlbumRoot";
import FooterRoot from "../../../../components/Layout/FooterRoot/Footer.layout";

function AdminGestionAlbumPage() {
    return (
        <section className={`AdminGestionAlbumPage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <AdminGestionAlbumRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    );
}

export default AdminGestionAlbumPage;
