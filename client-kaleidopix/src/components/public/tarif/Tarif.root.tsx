/* Import des modules CSS */
import style from "../../style.root.module.css";

/* Import des composants d'Elements */
import { TarifCard_Element } from "../../elements/tarif-card/TarifCard.element";

function Tarif_Root() {
    return (
        <section className={`Tarif_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1_NNNN}>
                    Tarif_Root
                </h1>
            </header>
            <TarifCard_Element />
        </section>
    )
}

export default Tarif_Root;
