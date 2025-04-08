import style from "./MentionsLegalesMobile.module.css";

/* Import des composants */
import Separator from "../ComponentsMentionsLegalesRoot/Separator/Separator";
import MentionsLegalesSectionA from "../ComponentsMentionsLegalesRoot/MentionsLegalesComponentA/MentionsLegalesComponentA";
import MentionsLegalesSectionB from "../ComponentsMentionsLegalesRoot/MentionsLegalesComponentB/MentionsLegalesComponentB";
import MentionsLegalesSectionC from "../ComponentsMentionsLegalesRoot/MentionsLegalesComponentC/MentionsLegalesComponentC";
import MentionsLegalesSectionD from "../ComponentsMentionsLegalesRoot/MentionsLegalesComponentD/MentionsLegalesComponentD";
import MentionsLegalesSectionE from "../ComponentsMentionsLegalesRoot/MentionsLegalesComponentE/MentionsLegalesComponentE";
import MentionsLegalesSectionF from "../ComponentsMentionsLegalesRoot/MentionsLegalesComponentF/MentionsLegalesComponentF";

function MentionsLegalesMobile() {
    return (
        <section className={style.MentionsLegalesMobile}>
            <header className={style.ContainerTitle}>
                <h1 className={style.Title}>
                    Mentions Légales
                </h1>
            </header>

            <Separator />

            {/* Section A ou 1 : Edition du site */}
            <MentionsLegalesSectionA />
            <Separator />

            {/* Section B ou 2 : Propriété intellectuelle et contrefaçons */}
            <MentionsLegalesSectionB />
            <Separator />

            {/* Section C ou 3 : Limitations de responsabilité */}
            <MentionsLegalesSectionC />
            <Separator />

            {/* Section D ou 4 : CNIL et gestion des données personnelles */}
            <MentionsLegalesSectionD />
            <Separator />

            {/* Section E ou 5 : Liens hypertextes et cookies */}
            <MentionsLegalesSectionE />
            <Separator />

            {/* Section F ou 6 : Droit applicable et attribution de juridiction */}
            <MentionsLegalesSectionF />
        </section>
    );
}

export default MentionsLegalesMobile;
