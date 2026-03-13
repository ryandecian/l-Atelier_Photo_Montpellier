/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import UserGestionAlbum_Root from "../../../../components/private/users/user-gestion-album/UserGestionAlbum.root";
import Footer from "../../../../components/layout/footer_Layout/Footer.layout";

function UserGestionAlbum_Page() {
    return (
        <div className={`UserGestionAlbum_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <UserGestionAlbum_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default UserGestionAlbum_Page;
