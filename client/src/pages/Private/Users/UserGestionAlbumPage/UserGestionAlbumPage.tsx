import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/Layout/NavRoot/NavRoot";
import UserGestionAlbumRoot from "../../../../components/Private/Users/UserGestionAlbumRoot/UserGestionAlbumRoot";
import FooterRoot from "../../../../components/Layout/FooterRoot/FooterRoot";

function UserGestionAlbumPage() {
    return (
        <div className={`UserGestionAlbumPage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <UserGestionAlbumRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    );
}

export default UserGestionAlbumPage;
