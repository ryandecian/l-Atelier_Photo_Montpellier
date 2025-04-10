import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import UserSystemeRoot from "../../components/UserSystemeRoot/UserSystemeRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";

function UserSystemePage() {
    return (
        <div className={style.Page}>
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
