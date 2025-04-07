import styleRoot from "../StyleRootComponent.module.css"
import HomeRootComponentB from "./ComponentsHomeRoot/HomeRootComponentB/HomeRootComponentB";

function HomeRoot() {
    return (
        <section className={`${styleRoot.HomeRoot} ${styleRoot.ContainerRoot}`}>
            {/* Container B :  */}
            <HomeRootComponentB />

            {/* Container 2 : Avis Client */}
        </section>
    );
}

export default HomeRoot;