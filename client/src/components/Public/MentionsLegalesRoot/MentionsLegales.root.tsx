import style from "../../StyleRootComponent.module.css";

/* Import des composants */
import Separator from "./ComponentsMentionsLegalesRoot/Separator/Separator";
import MentionsLegalesComponentA from "./ComponentsMentionsLegalesRoot/MentionsLegalesComponentA/MentionsLegalesComponentA";
import MentionsLegalesComponentB from "./ComponentsMentionsLegalesRoot/MentionsLegalesComponentB/MentionsLegalesComponentB";
import MentionsLegalesComponentC from "./ComponentsMentionsLegalesRoot/MentionsLegalesComponentC/MentionsLegalesComponentC";
import MentionsLegalesComponentD from "./ComponentsMentionsLegalesRoot/MentionsLegalesComponentD/MentionsLegalesComponentD";
import MentionsLegalesComponentE from "./ComponentsMentionsLegalesRoot/MentionsLegalesComponentE/MentionsLegalesComponentE";
import MentionsLegalesComponentF from "./ComponentsMentionsLegalesRoot/MentionsLegalesComponentF/MentionsLegalesComponentF";

function MentionsLegalesRoot() {
    return (
        <section className={`MentionsLegalesRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitleH1}>
                <h1 className={style.TitleH1}>
                    Mentions Légales
                </h1>
            </header>

            <Separator />

            {/* Section A ou 1 : Edition du site */}
            <MentionsLegalesComponentA />
            <Separator />

            {/* Section B ou 2 : Propriété intellectuelle et contrefaçons */}
            <MentionsLegalesComponentB />
            <Separator />
            
            {/* Section C ou 3 : Limitations de responsabilité */}
            <MentionsLegalesComponentC />
            <Separator />

            {/* Section D ou 4 : CNIL et gestion des données personnelles */}
            <MentionsLegalesComponentD />
            <Separator />

            {/* Section E ou 5 : Liens hypertextes et cookies */}
            <MentionsLegalesComponentE />
            <Separator />

            {/* Section F ou 6 : Droit applicable et attribution de juridiction */}
            <MentionsLegalesComponentF />
        </section>
    );
}

export default MentionsLegalesRoot;
