import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import EditUserRoot from "../../../../components/private/All/EditUserRoot/EditUserRoot";
import Footer from "../../../../components/layout/footer_Layout/Footer.layout";

function EditUserPage() {
    return (
        <div className={`DataUserPage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <EditUserRoot />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default EditUserPage;
