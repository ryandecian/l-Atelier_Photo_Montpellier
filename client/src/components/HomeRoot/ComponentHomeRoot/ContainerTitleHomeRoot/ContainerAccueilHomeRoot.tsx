import style from "./ContainerAccueilHomeRoot.module.css";
import { Link } from "react-router-dom";

function ContainerAccueilHomeRoot() {
    return (
        <>
            {/* Ce Composant renvois 2 éléments au lieu d'un comme les autres, c'est pourquoi on utilise <> </> */}
            <header className={style.ContainerTitle}>
                <h1 className={style.PrimaryTitle}>
                    Photographe professionnelle à Montpellier authentiques
                </h1>
            </header>
            

            <section className={style.ContainerAccueil}>
                <p className={style.Slogan}>Capturez l'émotion du regard</p>
                <Link to="#" className={style.ButtonDecouvrir}>Découvrir mon univers !</Link>
            </section>
        </>
    );
}

export default ContainerAccueilHomeRoot;
