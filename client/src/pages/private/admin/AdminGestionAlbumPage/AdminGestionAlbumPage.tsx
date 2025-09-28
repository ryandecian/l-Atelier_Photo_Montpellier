import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import AdminGestionAlbumRoot from "../../../../components/Private/Admin/AdminGestionAlbumRoot/AdminGestionAlbumRoot";
import Footer from "../../../../components/layout/footer/Footer.layout";

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
                <Footer />
            </footer>
        </section>
    );
}

export default AdminGestionAlbumPage;
