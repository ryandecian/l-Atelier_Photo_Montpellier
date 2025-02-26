import style from './HomePC.module.css';
import { Link } from 'react-router-dom';

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

            <div className={style.ContainerIntroduction}>
                <div className={style.IntroTitle}>
                    <h2>
                        INTRODUCTION :
                    </h2>
                </div>
                <div className={style.IntroText1}>
                    <p>
                        Vous cherchez à immortaliser des moments uniques à travers des portraits authentiques,
                        des photos de mariage, des shootings lifestyle ou même en vidéo ?
                    </p>
                </div>
                <div className={style.IntroText2}>
                    <p>
                        En tant que photographe professionnelle à Montpellier, je m'engage à capturer vos moments précieux avec professionnalisme et sensibilité.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomePC;