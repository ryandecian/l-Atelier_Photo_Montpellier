import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import EditUserRoot from "../../../../components/private/all/EditUserRoot/EditUserRoot";
import Footer from "../../../../components/layout/footer_Layout/Footer.layout";

function EditUser_Page() {
    return (
        <div className={`EditUser_Page ${style.Page}`}>
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

export default EditUser_Page;
