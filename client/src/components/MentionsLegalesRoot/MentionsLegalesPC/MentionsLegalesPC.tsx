import style from "./MentionsLegalesPC.module.css";

/* Import des composants */
import Separator from "../ComponentsMentionsLegalesRoot/Separator/Separator";
import TitleMentionsLegalesRoot from "../ComponentsMentionsLegalesRoot/TitleMentionsLegalesRoot/TitleMentionsLegalesRoot";
import MentionsLegaleSectionA from "../ComponentsMentionsLegalesRoot/MentionsLegalesSectionA/MentionsLegaleSectionA";

function MentionsLegalesPC() {
    return (
        <section className={style.MentionsLegalesPC}>
            <TitleMentionsLegalesRoot />

            <Separator />

            <MentionsLegaleSectionA />


            <section>
                <header>
                    <h2>Propriété intélectuelle</h2>
                </header>

                <article>
                    <p>text 1</p>
                </article>
                <article>
                    <p>text 2</p>
                </article>
            </section>

            <section>
                <header>
                    <h2>Limitation</h2>
                </header>

                <article>
                    <p>text 1</p>
                </article>
                <article>
                    <p>text 2</p>
                </article>
            </section>
        </section>
    );
}

export default MentionsLegalesPC;
