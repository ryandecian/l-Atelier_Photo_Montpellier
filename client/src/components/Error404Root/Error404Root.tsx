import { Link } from "react-router-dom";
import style from "./Error404Root.module.css";
import Image404 from "../../assets/Images/Error404Image/Error404Image.png";
import ListDataRouter from "../../router/router";
const Error404Root = () => {
  return (
    <section className={style.Error404Root}>
      <header className={style.ContainerTitle}>
        <h1 className={style.Title}>OUPSS!! Il n'y a rien à voir ici !</h1>
      </header>

      <section className={style.Container404}>
        <figure className={style.ContainerImg}>
          <img src={Image404} alt="Vice Versa, image de Tristesse qui pleure" />
        </figure>

        <div className={style.ContainerText}>
          <p className={style.TextTarget1}>Awww... Ne pleure pas !</p>
          <p className={style.TextTarget2}>C'est juste une erreur 404</p>
          <p className={style.TextTarget3}>
            La page que tu cherches semble introuvable.
          </p>
          <Link to={ListDataRouter[0].path} className={style.Button}>Revenir à l'accueil</Link>
        </div>
      </section>
    </section>
  );
};

export default Error404Root;
