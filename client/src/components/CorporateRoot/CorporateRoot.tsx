import style from "../StyleRootComponent.module.css";
import CorporateRootComponentA from "./ComponentsCorporateRoot/CorporateRootComponentA/CorporateRootComponentA";

function CorporateRoot() {
    return (
        <section className={`CorporateRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    L'importance de votre signature visuelle : bien plus qu'une simple photo !
                </h1>
            </header>

            {/* Container A : Titre et textes */}
            <CorporateRootComponentA />
        </section>
    )
}

export default CorporateRoot;
