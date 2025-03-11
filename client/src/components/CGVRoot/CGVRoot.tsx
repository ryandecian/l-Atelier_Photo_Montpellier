import style from "./CGVRoot.module.css";
import CGVComposantA from "./ComponentsCGVRoot/CGVComposantA/CGVComposantA";

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
        </section>
    );
}

export default CGVRoot;
