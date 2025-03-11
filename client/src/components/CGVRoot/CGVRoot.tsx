import style from "./CGVRoot.module.css";
import CGVComposantA from "./ComponentsCGVRoot/CGVComposantA/CGVComposantA";
import CGVComposantB from "./ComponentsCGVRoot/CGVComposantB/CGVComposantB";

function CGVRoot() {
    return (
        <section className={style.CGVRoot}>
            <header className={style.ContainerTitle}>
                <h1 className={style.Title}>
                    Conditions Générales de vente
                </h1>
            </header>

            {/* Container 1 : Dispositions communes aux particuliers et entreprises */}
            <CGVComposantA />

            {/* Container 2 : Dispositions spécifiques aux particuliers */}
            <CGVComposantB />
        </section>
    );
}

export default CGVRoot;
