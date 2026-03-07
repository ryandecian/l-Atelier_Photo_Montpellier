/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import EditUserAdmin_Root from "../../../../components/private/admin/edit-user-admin/EditUserAdmin.root";
import Footer from "../../../../components/layout/footer/Footer.layout";

function EditUserAdmin_Page() {
    return (
        <div className={`EditUserAdmin_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <EditUserAdmin_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default EditUserAdmin_Page;
