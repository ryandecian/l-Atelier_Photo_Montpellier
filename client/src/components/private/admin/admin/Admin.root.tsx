/* Import des modules CSS */
import style from "../../../StyleRootComponent.module.css";
import css from "./admin.module.css";

/* Import des composants d'Elements */
import { ServiceCardAdminLink_Element, ServiceCardAdminButton_Element } from "../../../elements/service-card-private-component/ServiceCardAdmin.element";

/* Import des composants Router */
import router from "../../../../router/router";

/* Import des Hooks */
import { useLogout_Hook } from "../../../../hook/useLogout.hook";
import { useLockedPage_Hook } from "../../../../hook/useLockedPage.security.hook";

function Admin_Root() {
    const userInfo = useLockedPage_Hook("admin");
    const logout = useLogout_Hook();

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
                    link={router[26].path}
                />
                <ServiceCardAdminLink_Element
                    nameService="Gestion des utilisateurs"
                    etat={true}
                    link={router[23].path}
                />
                    <ServiceCardAdminLink_Element
                        nameService="Gestion des albums"
                        etat={true}
                        link={router[33].path}
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

export default Admin_Root;
