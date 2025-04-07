import styleRoot from "../StyleRootComponent.module.css"
import HomeRootComponentB from "./ComponentsHomeRoot/HomeRootComponentB/HomeRootComponentB";

function HomeRoot() {
    return (
        <section className={`${styleRoot.HomeRoot} ${styleRoot.ContainerRoot}`}>
            {/* Container A : Accueil */}
            
            {/* Container B : Introduction */}
            <HomeRootComponentB />

            {/* Container C : Portrait */}
            
            {/* Container D : Mariage */}

            {/* Container E : Avis Client */}

            {/* Container F : Autor */}

        </section>
    );
}

export default HomeRoot;