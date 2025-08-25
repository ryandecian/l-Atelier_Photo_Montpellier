import { Link } from "react-router-dom";
import css from "./Error404Root.module.css";
import Image404 from "../../../assets/Images/Error404Image/Error404Image.png";
import ListDataRouter from "../../../router/router";

const Error404Root = () => {
    return (
        <section className={css.Error404Root}>
            <header className={css.ContainerTitle}>
                <h1 className={css.Title}>OUPSS!! Il n'y a rien à voir ici !</h1>
            </header>

            <section className={css.Container404}>
                <figure className={css.ContainerImg}>
                    <img src={Image404} alt="Vice Versa, image de Tristesse qui pleure" />
                </figure>

                <div className={css.ContainerText}>
                    <p className={css.TextTarget1}>Awww... Ne pleure pas !</p>
                    <p className={css.TextTarget2}>C'est juste une erreur 404</p>
                    <p className={css.TextTarget3}>
                        La page que tu cherches semble introuvable.
                    </p>
                    <Link to={ListDataRouter[0].path} className={css.Button}>
                        Revenir à l'accueil
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default Error404Root;
