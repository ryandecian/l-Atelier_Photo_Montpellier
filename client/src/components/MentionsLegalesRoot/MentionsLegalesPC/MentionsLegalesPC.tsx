import style from "./MentionsLegalesPC.module.css";

function MentionsLegalesPC() {
    return (
        <section className={style.MentionsLegalesPC}>
            <header>
                <h1>Mentions Légales</h1>
            </header>

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
