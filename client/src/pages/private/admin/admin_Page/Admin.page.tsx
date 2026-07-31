/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import Admin_Root from "../../../../components/private/admin/admin/Admin.root";
import Footer_root_layout from "../../../../components/layout/footer_Layout/Footer.root.layout";

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
                <Footer_root_layout />
            </footer>
        </section>
    );
}

export default Admin_Page;
