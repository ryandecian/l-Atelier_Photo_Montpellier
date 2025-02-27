import style from './HomePC.module.css';

/* Import des composants */
import ContainerIntroductionHomeRoot from '../ComponentHomeRoot/ContainerIntroductionHomeRoot/ContainerIntroductionHomeRoot';
import ContainerExpertiseHomeRoot from '../ComponentHomeRoot/ContainerExpertiseHomeRoot/ContainerExpertiseHomeRoot';
import ContainerAccueilHomeRoot from '../ComponentHomeRoot/ContainerTitleHomeRoot/ContainerAccueilHomeRoot';

function HomePC() {
    return (
        <div className={style.HomePC}>
            {/* Container 1 : Accueil */}
            <ContainerAccueilHomeRoot />

            {/* Container 2 : Introduction */}
            <ContainerIntroductionHomeRoot />

            {/* Container 3 : Mon expertise */}
            <ContainerExpertiseHomeRoot />

            {/* Container 4 : Présentation des services */}
            <div className={style.ContainerServices}></div>
        </div>
    );
}

export default HomePC;