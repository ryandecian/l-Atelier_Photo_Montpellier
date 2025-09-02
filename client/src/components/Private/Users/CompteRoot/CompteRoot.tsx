import css from "./CompteRoot.module.css";
import style from "../../../StyleRootComponent.module.css";
import { ServiceCardUserLink, ServiceCardUserButton } from "../../../Elements/ServiceCardComponent/ServiceCardUser";
import useLogout from "../../../../hook/useLogout.hook";
import ListDataRouter from "../../../../router/router";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";

function CompteRoot() {
    const userInfo = useLockedPage("user");
    const logout = useLogout();

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
                <ServiceCardUserLink
                    nameService="Mes informations"
                    link={ListDataRouter[24].path}
                />
                <ServiceCardUserLink
                    nameService="Mes séances"
                    link={ListDataRouter[32].path}
                />
                <ServiceCardUserLink
                    nameService="Mes factures"
                    link="#"
                />
                <ServiceCardUserButton
                    nameService="Déconnexion"
                    onClick={logout}
                />
            </div>
        </section>
    );
}

export default CompteRoot;
