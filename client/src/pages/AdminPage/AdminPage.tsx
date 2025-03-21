import style from "./AdminPage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import AdminRoot from "../../components/AdminRoot/AdminRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";

function AdminPage() {
    return (
        <div className={style.AdminPage}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <AdminRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    );
}

export default AdminPage;
