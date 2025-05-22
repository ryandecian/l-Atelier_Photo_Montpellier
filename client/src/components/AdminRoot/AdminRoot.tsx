import css from "./AdminRoot.module.css";
import style from "../StyleRootComponent.module.css";
import ServiceCardComponent from "../ServiceCardComponent/ServiceCardComponent";
import useLogout from "../../hook/useLogout.hook";
import ListDataRouter from "../../router/router";
import useLockedPage from "../../hook/useLockedPage.security.hook";

function AdminRoot() {
  const userInfo = useLockedPage("admin");
  const logout = useLogout();

  if (!userInfo) return <p>Chargement...</p>;

  return (
    <section className={`${css.AdminRoot} ${style.ContainerRootRacine}`}>
      <div className={css.TopBar}>
        <p>Bonjour {userInfo.firstname} {userInfo.lastname}</p>
        <button className={css.LogoutButton} onClick={logout}>Déconnexion</button>
      </div>
        <h1 className={css.Title}>👑 Interface Admin</h1>

      <div className={css.ContainerCard}>
        <ServiceCardComponent nameService="Gestion des utilisateurs" etat={true} link={ListDataRouter[23].path} />
        <ServiceCardComponent nameService="Gestion des factures" etat={false} link="#" />
        <ServiceCardComponent nameService="Gestion des statistiques" etat={false} link="#" />
        <ServiceCardComponent nameService="Gestion des albums" etat={false} link="#" />
        <ServiceCardComponent nameService="Gestion des photos" etat={false} link="#" />
      </div>
    </section>
  );
}

export default AdminRoot;
