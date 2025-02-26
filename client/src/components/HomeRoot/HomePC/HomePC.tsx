import style from './HomePC.module.css';
import { Link } from 'react-router-dom';

function HomePC() {
    return (
        <div className={style.HomePC}>

            <h1 className={style.PrimaryTitle}>
                Photographe professionnelle à Montpellier authentiques.
            </h1>

            <div className={style.ContainerAccueil}>
                <p>Capturez l'émotion du regard</p>
                <p>
                    <button type="button" className={style.ButtonDecouvrir}>
                        <Link to="#" >
                            Découvrir mon univers !
                        </Link>
                    </button>
                </p>
            </div>
        </div>
    );
}

export default HomePC;