import style from './HomeMobile.module.css';

/* Import des composants */
import ContainerAccueilHomeRoot from '../ComponentHomeRoot/ContainerTitleHomeRoot/ContainerAccueilHomeRoot';
import ContainerExpertiseHomeRoot from '../ComponentHomeRoot/ContainerExpertiseHomeRoot/ContainerExpertiseHomeRoot';
import ContainerServicesHomeRoot from '../ComponentHomeRoot/ContainerServicesHomeRoot/ContainerServicesHomeRoot';

import HomeRootContainerA from '../ComponentHomeRoot/HomeRootContainerA/HomeRootContainerA';
import HomeRootContainerB from '../ComponentHomeRoot/HomeRootComposantB/HomeRootComposantB';

function HomeMobile() {
    return (
        <div className={style.HomeMobile}>
            {/* Container 1 : Accueil */}
            <ContainerAccueilHomeRoot />

            {/* Container 2 : Introduction */}
            <HomeRootContainerA />

            {/* Container 3 : Mon expertise */}
            <HomeRootContainerB />
            <ContainerExpertiseHomeRoot />

            {/* Container 4 : Présentation des services */}
            <ContainerServicesHomeRoot />
        </div>
    );
}

export default HomeMobile;