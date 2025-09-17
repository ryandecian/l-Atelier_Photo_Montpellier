import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import AllUserSystemeRoot from "../../../../components/Private/Admin/AllUserSystemeRoot/AllUserSystemeRoot";
import FooterRoot from "../../../../components/layout/footer/Footer.layout";

function AllUserSystemePage() {
    return (
        <div className={`UserSystemePage ${style.Page}`}>
            <header className={style.Header}>
                <NavRoot />
            </header>
            <main className={style.Main}>
                <AllUserSystemeRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    );
}

export default AllUserSystemePage;
