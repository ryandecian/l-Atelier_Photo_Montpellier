import style from "./MentionsLegalesPC.module.css";

/* Import des composants */
import Separator from "../ComponentsMentionsLegalesRoot/Separator/Separator";
import MentionsLegalesSectionA from "../ComponentsMentionsLegalesRoot/MentionsLegalesSectionA/MentionsLegalesSectionA";

function MentionsLegalesPC() {
    return (
        <section className={style.MentionsLegalesPC}>
            <header className={style.ContainerTitle}>
                <h1 className={style.Title}>
                    Mentions Légales
                </h1>
            </header>

            <Separator />

            {/* Section A ou 1 : Edition du site */}
            <MentionsLegalesSectionA />

        </section>
    );
}

export default MentionsLegalesPC;
