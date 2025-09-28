import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import UserGestionAlbumRoot from "../../../../components/Private/Users/UserGestionAlbumRoot/UserGestionAlbumRoot";
import Footer from "../../../../components/layout/footer/Footer.layout";

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
                <Footer />
            </footer>
        </div>
    );
}

export default UserGestionAlbumPage;
