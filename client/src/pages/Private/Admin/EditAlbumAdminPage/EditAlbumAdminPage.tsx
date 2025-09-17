import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/Layout/NavRoot/NavRoot";
import EditAlbumAdminRoot from "../../../../components/Private/Admin/EditAlbumAdminRoot/EditAlbumAdminRoot";
import FooterRoot from "../../../../components/Layout/FooterRoot/Footer.layout";

function EditAlbumAdminPage() {
    return (
        <section className={`EditAlbumAdminPage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <EditAlbumAdminRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    );
}

export default EditAlbumAdminPage;
