/* Import des modules CSS */
import style from "../../../StyleRootComponent.module.css";
import css from "./compte.module.css";

/* Import des composants d'Elements */
import { ServiceCardUserLink_Element, ServiceCardUserButton_Element } from "../../../elements/service-card-private-component/ServiceCardUser.element";

/* Import des composants Router */
import router from "../../../../router/router";

/* Import des Hooks */
import { useLockedPage_Hook } from "../../../../hook/useLockedPage.security.hook";
import { useLogout_Hook } from "../../../../hook/useLogout.hook";

function Compte_Root() {
    const userInfo = useLockedPage_Hook("user");
    const logout = useLogout_Hook();

    if (!userInfo) {
        return <p>Chargement...</p>;
    }

    return (
        <section className={`${css.CompteRoot} ${style.ContainerRootRacine}`}>
            <div className={css.TopBar}>
                <p>
                    Bonjour {userInfo.firstname} {userInfo.lastname}
                </p>
            </div>

            <h1 className={css.Title}>Bienvenue sur votre compte</h1>

            <div className={css.ContainerCard}>
                <ServiceCardUserLink_Element
                    nameService="Mes informations"
                    link={router[24].path}
                />
                <ServiceCardUserLink_Element
                    nameService="Mes séances"
                    link={router[32].path}
                />
                {/* Enlèvement de ce service, à la demande de la cliente */}
                {/* <ServiceCardUserLink_Element
                    nameService="Mes factures"
                    link="#"
                /> */}
                <ServiceCardUserButton_Element
                    nameService="Déconnexion"
                    onClick={logout}
                />
            </div>
        </section>
    );
}

export default Compte_Root;
