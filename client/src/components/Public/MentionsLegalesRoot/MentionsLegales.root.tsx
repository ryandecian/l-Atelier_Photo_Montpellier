/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";

/* Import des composants */
import { Separator_Component } from "./components/separator/Separator.component";
import { MentionsLegalesA_Component } from "./components/MentionsLegalesA.component";
import { MentionsLegalesB_Component } from "./components/MentionsLegalesB.component";
import { MentionsLegalesC_Component } from "./components/MentionsLegalesC.component";
import { MentionsLegalesD_Component } from "./components/MentionsLegalesD.component";
import { MentionsLegalesE_Component } from "./components/MentionsLegalesE.component";
import { MentionsLegalesF_Component } from "./components/MentionsLegalesF.component";

function MentionsLegales_Root() {
    return (
        <section className={`MentionsLegales_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitleH1}>
                <h1 className={style.TitleH1}>
                    Mentions Légales
                </h1>
            </header>

            <Separator_Component />

            {/* Section A ou 1 : Edition du site */}
            <MentionsLegalesA_Component />
            <Separator_Component />

            {/* Section B ou 2 : Propriété intellectuelle et contrefaçons */}
            <MentionsLegalesB_Component />
            <Separator_Component />
            
            {/* Section C ou 3 : Limitations de responsabilité */}
            <MentionsLegalesC_Component />
            <Separator_Component />

            {/* Section D ou 4 : CNIL et gestion des données personnelles */}
            <MentionsLegalesD_Component />
            <Separator_Component />

            {/* Section E ou 5 : Liens hypertextes et cookies */}
            <MentionsLegalesE_Component />
            <Separator_Component />

            {/* Section F ou 6 : Droit applicable et attribution de juridiction */}
            <MentionsLegalesF_Component />
        </section>
    );
}

export default MentionsLegales_Root;
