import style from "../stylePage.module.css";
import NavRoot from "../../components/Layout/NavRoot/NavRoot";
import AdminRoot from "../../components/AdminRoot/AdminRoot";
import FooterRoot from "../../components/Layout/FooterRoot/FooterRoot";

function AdminPage() {
    return (
        <section className={`AdminPage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <AdminRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    );
}

export default AdminPage;
