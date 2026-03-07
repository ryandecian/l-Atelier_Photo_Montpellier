/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import AllUserSysteme_Root from "../../../../components/private/admin/all-user-systeme/AllUserSysteme.root";
import Footer from "../../../../components/layout/footer/Footer.layout";

function AllUserSysteme_Page() {
    return (
        <div className={`UserSysteme_Page ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <AllUserSysteme_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </div>
    );
}

export default AllUserSysteme_Page;
