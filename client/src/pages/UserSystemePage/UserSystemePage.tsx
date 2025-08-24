import style from "../stylePage.module.css";
import NavRoot from "../../components/Layout/NavRoot/NavRoot";
import UserSystemeRoot from "../../components/UserSystemeRoot/UserSystemeRoot";
import FooterRoot from "../../components/Layout/FooterRoot/FooterRoot";

function UserSystemePage() {
    return (
        <div className={`UserSystemePage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <UserSystemeRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    );
}

export default UserSystemePage;
