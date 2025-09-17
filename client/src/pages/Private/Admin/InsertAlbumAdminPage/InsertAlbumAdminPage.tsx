import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/Llayout/NavRoot/NavRoot";
import InsertAlbumAdminRoot from "../../../../components/Private/Admin/InsertAlbumAdminRoot/InsertAlbumAdminRoot";
import FooterRoot from "../../../../components/Llayout/footer/Footer.layout";

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
