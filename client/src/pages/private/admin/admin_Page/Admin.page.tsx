/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import Admin_Root from "../../../../components/privates/admin/admin/Admin.root";
import Footer from "../../../../components/layout/footer/Footer.layout";

function Admin_Page() {
    return (
        <section className={`Admin_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <Admin_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </section>
    );
}

export default Admin_Page;
