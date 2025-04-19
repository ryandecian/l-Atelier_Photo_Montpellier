import style from "../../../StyleRootComponent.module.css";

function PortraitSoloComponentA() {
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    Un Portrait Feel Good, ce n'est pas qu'un beau cliché !
                </h2>
            </header>
            
            <p className={style.TextP4}>
                C'est un moment pour soi. <br />
                Un espace-temps rare où l’on se pose, on respire, on ose être soi-même… devant l’objectif, mais aussi en dedans.
            </p>

            <p className={style.TextP4}>
                Un portrait solo feel good, c’est 
                <span className={style.SpanBold}>
                    {" s’autoriser à se voir autrement : "}
                </span>
            </p>
        </section>
    )
}

export default PortraitSoloComponentA;
