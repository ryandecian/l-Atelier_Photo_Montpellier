import css from "./AdminRoot.module.css";
import style from "../StyleRootComponent.module.css";
import useAuthCheck from "../../hook/useAuthCheck.utils.hook";
import ServiceCardComponent from "../ServiceCardComponent/ServiceCardComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLogout from "../../hook/useLogout.hook";
import ListDataRouter from "../../router/router";

function AdminRoot() {
  const { isLoggedIn, userInfo, isChecking } = useAuthCheck();
  const logout = useLogout();
  const navigate = useNavigate();

  // Vérification du Role et de la connexion
  useEffect(() => {
    if (!isChecking && userInfo?.role === "user") {
      navigate("/compte");
    }
  }, [isChecking, userInfo, navigate]);

  // En attente de vérification du token
  if (isChecking) return <p>Chargement...</p>;

  // Sécurité supplémentaire
  if (!isLoggedIn || !userInfo) return <p>Accès refusé</p>;

  return (
    <section className={`${css.AdminRoot} ${style.ContainerRootRacine}`}>
      <div className={css.TopBar}>
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
