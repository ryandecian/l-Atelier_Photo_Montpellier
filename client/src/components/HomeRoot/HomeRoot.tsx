import styleRoot from "../StyleRootComponent.module.css"
import HomeRootComponentB from "./ComponentsHomeRoot/HomeRootComponentB/HomeRootComponentB";
import HomeRootComponentC from "./ComponentsHomeRoot/HomeRootComponentC/HomeRootComponentC";
import HomeRootComponentD from "./ComponentsHomeRoot/HomeRootComponentD/HomeRootComponentD";
import HomeRootComponentE from "./ComponentsHomeRoot/HomeRootComponentE/HomeRootComponentE";

function HomeRoot() {
    return (
        <section className={`${styleRoot.HomeRoot} ${styleRoot.ContainerRoot}`}>
            {/* Container A : Accueil */}

            {/* Container B : Introduction */}
            <HomeRootComponentB />

            {/* Container C : Portrait */}
            <HomeRootComponentC />

            
            {/* Container D : Mariage */}
            <HomeRootComponentD />

            {/* Container E : Avis Client */}
            <HomeRootComponentE />

            {/* Container F : Autor */}

        </section>
    );
}

export default HomeRoot;