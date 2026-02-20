/* Import des modules CSS */
import style from "../../style.root.module.css";

/* Import des Components de Data */
import { tarif_Data } from "./tarif.data";

/* Import des composants d'Elements */
import { TarifCard_Element } from "../../elements/tarif-card/TarifCard.element";

function Tarif_Root() {
    return (
        <section className={`Tarif_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1_NNNN}>
                    Tarif des prestations
                </h1>
            </header>

            <h2 className={style.TitleH2_00N0}>
                Tarifs vidéo corporate à Montpellier
            </h2>

            <p className={style.TextP4}>
                <strong>Vous souhaitez connaître le prix d’une vidéo corporate à Montpellier ou le budget à prévoir pour 
                une vidéo d’entreprise professionnelle ?</strong>
            </p>

            <p className={style.TextP4}>
                Chaque projet vidéo reste sur-mesure, mais proposer des repères clairs permet de mieux se projeter. <br />
                Je réalise des <strong>vidéos corporate, vidéos d’activité et vidéos métier </strong> pour les entreprises, 
                PME et organisations basées à <strong>Montpellier et dans l’Hérault</strong>, avec une approche orientée {` `}
                <strong>utilité, clarté et impact réel.</strong>
            </p>

            <TarifCard_Element items={tarif_Data} />
        </section>
    )
}

export default Tarif_Root;
