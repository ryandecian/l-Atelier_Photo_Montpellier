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

            <div></div>
        </div>
    );
}

export default HomePC;