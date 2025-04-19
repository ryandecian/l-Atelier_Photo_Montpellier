import style from "../StyleRootComponent.module.css";

import PortraitSoloRootComponentA from "./ComponentsPortraitSoloRoot/PortraitSoloRootComponentA/PortraitSoloRootComponentA";
import PortraitSoloRootComponentB from "./ComponentsPortraitSoloRoot/PortraitSoloRootComponentB/PortraitSoloRootComponentB";

function PortraitSoloRoot() {
    return (
        <section className={`PortraitSoloRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Portrait Solo : Une séance photos pour renouer avec votre image !
                </h1>
            </header>

            {/* Container A */}
            <PortraitSoloRootComponentA />

            {/* Container A */}
            <PortraitSoloRootComponentB />
        </section>
    )
}

export default PortraitSoloRoot;
