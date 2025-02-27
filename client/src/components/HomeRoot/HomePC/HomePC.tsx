import style from './HomePC.module.css';
import { Link } from 'react-router-dom';

/* Import des composants */
import ContainerIntroductionHomeRoot from '../ComponentHomeRoot/ContainerIntroductionHomeRoot/ContainerIntroductionHomeRoot';
import ContainerExpertiseHomeRoot from '../ComponentHomeRoot/ContainerExpertiseHomeRoot/ContainerExpertiseHomeRoot';

function HomePC() {
    return (
        <div className={style.HomePC}>

            <div className={style.ContainerTitle}>
                <h1 className={style.PrimaryTitle}>
                    Photographe professionnelle à Montpellier authentiques
                </h1>
            </div>
            

            <div className={style.ContainerAccueil}>
                <p className={style.Slogan}>Capturez l'émotion du regard</p>
                <p className={style.ButtonDecouvrir}>
                    <button type="button">
                        <Link to="#" >
                            Découvrir mon univers !
                        </Link>
                    </button>
                </p>
            </div>

            {/* Container 1 : Introduction */}
            <ContainerIntroductionHomeRoot />

            {/* Container 2 : Mon expertise */}
            <ContainerExpertiseHomeRoot />

            {/* Container 3 : Présentation des services */}
            <div className={style.ContainerServices}></div>
        </div>
    );
}

export default HomePC;