/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import EditUser_Root from "../../../../components/private/all/edit-user/EditUser.root";
import Footer from "../../../../components/layout/footer_Layout/Footer.layout";

function EditUser_Page() {
    return (
        <div className={`EditUser_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <EditUser_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default EditUser_Page;
