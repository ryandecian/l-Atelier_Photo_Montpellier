import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/Layout/NavRoot/NavRoot";
import InsertAlbumAdminRoot from "../../../../components/Private/Admin/InsertAlbumAdminRoot/InsertAlbumAdminRoot";
import FooterRoot from "../../../../components/Layout/FooterRoot/FooterRoot";

function InsertAlbumAdminPage() {
    return (
        <div className={`InsertAlbumAdminPage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <InsertAlbumAdminRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    );
}

export default InsertAlbumAdminPage;
