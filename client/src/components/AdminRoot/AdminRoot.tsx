import css from "./AdminRoot.module.css";
import style from "../StyleRootComponent.module.css";
import useAuthCheck from "../../hook/useAuthCheck";
import ServiceCardComponent from "../ServiceCardComponent/ServiceCardComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminRoot() {
  const { isLoggedIn, userInfo, isChecking } = useAuthCheck();
  const navigate = useNavigate();

  // Vérification du Role et de la connexion
  useEffect(() => {
      if (!isChecking && userInfo?.role === "user") {
        navigate("/compte");
      }
    }, [isChecking, userInfo, navigate]);

  // En attente de vérification du token
  if (isChecking) return <p>Chargement...</p>;

  // Sécurité supplémentaire (même si redirection faite dans le hook)
  if (!isLoggedIn || !userInfo) return <p>Accès refusé</p>;

  return (
    <section className={`${css.AdminRoot} ${style.ContainerRootRacine}`}>
      {/* <h1>👑 Interface Admin</h1> */}
      <div className={css.ContainerCard}>
        <ServiceCardComponent nameService="Gestion des utilisateurs" etat={true} link="/admin/users" />
        <ServiceCardComponent nameService="Gestion des factures" etat={false} link="/admin/tickets" />
        <ServiceCardComponent nameService="Gestion des statistiques" etat={false} link="/admin/stats" />
        <ServiceCardComponent nameService="Gestion des albums" etat={false} link="/admin/services" />
        <ServiceCardComponent nameService="Gestion des photos" etat={false} link="/admin/tickets" />
      </div>
    </section>
  )
}

export default AdminRoot;
