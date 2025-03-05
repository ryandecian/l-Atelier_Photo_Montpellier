import style from './HomePC.module.css';

/* Import des composants */
import ContainerAccueilHomeRoot from '../ComponentHomeRoot/ContainerTitleHomeRoot/ContainerAccueilHomeRoot';
import ContainerIntroductionHomeRoot from '../ComponentHomeRoot/ContainerIntroductionHomeRoot/ContainerIntroductionHomeRoot';
import ContainerExpertiseHomeRoot from '../ComponentHomeRoot/ContainerExpertiseHomeRoot/ContainerExpertiseHomeRoot';
import ContainerServicesHomeRoot from '../ComponentHomeRoot/ContainerServicesHomeRoot/ContainerServicesHomeRoot';

import HomeRootContainerA from '../ComponentHomeRoot/HomeRootContainerA/HomeRootContainerA';

function HomePC() {
    return (
        <div className={style.HomePC}>
            {/* Container 1 : Accueil */}
            <ContainerAccueilHomeRoot />

            {/* Container 2 : Introduction */}
            <HomeRootContainerA />
            <ContainerIntroductionHomeRoot />

            {/* Container 3 : Mon expertise */}
            <ContainerExpertiseHomeRoot />

            {/* Container 4 : Présentation des services */}
            <ContainerServicesHomeRoot />
        </div>
    );
}

export default HomePC;