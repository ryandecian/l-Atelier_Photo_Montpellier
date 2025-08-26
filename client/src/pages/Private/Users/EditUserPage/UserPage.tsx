import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/Layout/NavRoot/NavRoot";
import UserRoot from "../../../../components/Private/Users/UserRoot/UserRoot";
import FooterRoot from "../../../../components/Layout/FooterRoot/FooterRoot";

function UserPage() {
    return (
        <div className={`UserPage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <UserRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    );
}

export default UserPage;
