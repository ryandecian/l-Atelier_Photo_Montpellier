import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/Layout/NavRoot/NavRoot";
import EditUserRoot from "../../../../components/Private/Users/EditUserRoot/EditUserRoot";
import FooterRoot from "../../../../components/Layout/FooterRoot/FooterRoot";

function EditUserPage() {
    return (
        <div className={`EditUserPage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <EditUserRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    );
}

export default EditUserPage;
