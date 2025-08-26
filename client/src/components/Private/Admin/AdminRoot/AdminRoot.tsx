import css from "./AdminRoot.module.css";
import style from "../../../StyleRootComponent.module.css";
import { ServiceCardAdminLink, ServiceCardAdminButton } from "../../../Elements/ServiceCardComponent/ServiceCardAdmin";
import useLogout from "../../../../hook/useLogout.hook";
import ListDataRouter from "../../../../router/router";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";

function AdminRoot() {
    const userInfo = useLockedPage("admin");
    const logout = useLogout();

    if (!userInfo) {
        return <p>Chargement...</p>;
    }

    return (
        <section className={`${css.AdminRoot} ${style.ContainerRootRacine}`}>
            <div className={css.TopBar}>
                <p>
                    Bonjour {userInfo.firstname} {userInfo.lastname}
                </p>
            </div>

            <h1 className={css.Title}>👑 Interface Admin</h1>

            <div className={css.ContainerCard}>
                <ServiceCardAdminLink
                    nameService="Gestion des utilisateurs"
                    etat={true}
                    link={ListDataRouter[23].path}
                />
                <ServiceCardAdminLink
                    nameService="Gestion des factures"
                    etat={false}
                    link="#"
                />
                <ServiceCardAdminLink
                    nameService="Gestion des statistiques"
                    etat={false}
                    link="#"
                />
                <ServiceCardAdminLink
                    nameService="Gestion des albums"
                    etat={false}
                    link="#"
                />
                <ServiceCardAdminLink
                    nameService="Gestion des photos"
                    etat={false}
                    link="#"
                />
                <ServiceCardAdminButton
                    nameService="Déconnexion"
                    etat={true}
                    onClick={logout}
                />
            </div>
        </section>
    );
}

export default AdminRoot;
