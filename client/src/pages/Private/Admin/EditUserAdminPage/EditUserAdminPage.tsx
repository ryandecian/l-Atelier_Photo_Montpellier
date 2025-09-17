import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import EditUserAdminRoot from "../../../../components/Private/Admin/EditUserAdminRoot/EditUserAdminRoot";
import Footer from "../../../../components/layout/footer/Footer.layout";

function EditUserAdminPage() {
    return (
        <div className={`DataUserPage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <EditUserAdminRoot />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default EditUserAdminPage;
