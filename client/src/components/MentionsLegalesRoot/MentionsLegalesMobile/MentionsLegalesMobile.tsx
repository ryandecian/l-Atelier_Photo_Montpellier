import style from "./MentionsLegalesMobile.module.css";

/* Import des composants */
import Separator from "../ComponentsMentionsLegalesRoot/Separator/Separator";
import MentionsLegalesSectionA from "../ComponentsMentionsLegalesRoot/MentionsLegalesSectionA/MentionsLegalesSectionA";
import MentionsLegalesSectionB from "../ComponentsMentionsLegalesRoot/MentionsLegalesSectionB/MentionsLegalesSectionB";

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
        </section>
    );
}

export default MentionsLegalesMobile;
