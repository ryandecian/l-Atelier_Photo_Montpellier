import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import AdminRoot from "../../../../components/Private/Admin/AdminRoot/AdminRoot";
import Footer from "../../../../components/layout/footer/Footer.layout";

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
                <Footer />
            </footer>
        </section>
    );
}

export default AdminPage;
