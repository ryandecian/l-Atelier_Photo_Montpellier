import css from "./AdminRoot.module.css";
import style from "../../../StyleRootComponent.module.css";
import { ServiceCardAdminLink_Element, ServiceCardAdminButton_Element } from "../../../Elements/service-card-private-component/ServiceCardAdmin.element";
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
                <ServiceCardAdminLink_Element
                    nameService="Mes informations"
                    etat={true}
                    link={ListDataRouter[26].path}
                />
                <ServiceCardAdminLink_Element
                    nameService="Gestion des utilisateurs"
                    etat={true}
                    link={ListDataRouter[23].path}
                />
                    <ServiceCardAdminLink_Element
                        nameService="Gestion des albums"
                        etat={true}
                        link={ListDataRouter[33].path}
                    />
                <ServiceCardAdminLink_Element
                    nameService="Gestion des factures"
                    etat={false}
                    link="#"
                />
                <ServiceCardAdminLink_Element
                    nameService="Gestion des statistiques"
                    etat={false}
                    link="#"
                />
                <ServiceCardAdminButton_Element
                    nameService="Déconnexion"
                    etat={true}
                    onClick={logout}
                />
            </div>
        </section>
    );
}

export default AdminRoot;
