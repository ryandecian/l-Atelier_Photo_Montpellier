import style from "./MentionsLegalesPC.module.css";

/* Import des composants */
import Separator from "../ComponentsMentionsLegalesRoot/Separator/Separator";
import MentionsLegalesSectionA from "../ComponentsMentionsLegalesRoot/MentionsLegalesSectionA/MentionsLegalesSectionA";
import MentionsLegalesSectionB from "../ComponentsMentionsLegalesRoot/MentionsLegalesSectionB/MentionsLegalesSectionB";
import MentionsLegalesSectionC from "../ComponentsMentionsLegalesRoot/MentionsLegalesSectionC/MentionsLegalesSectionC";
import MentionsLegalesSectionD from "../ComponentsMentionsLegalesRoot/MentionsLegalesSectionD/MentionsLegalesSectionD";
import MentionsLegalesSectionE from "../ComponentsMentionsLegalesRoot/MentionsLegalesSectionE/MentionsLegalesSectionE";
import MentionsLegalesSectionF from "../ComponentsMentionsLegalesRoot/MentionsLegalesSectionF/MentionsLegalesSectionF";

function MentionsLegalesPC() {
    return (
        <section className={`${style.MentionsLegalesPC} ${style.Container}`}>
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

export default MentionsLegalesPC;
