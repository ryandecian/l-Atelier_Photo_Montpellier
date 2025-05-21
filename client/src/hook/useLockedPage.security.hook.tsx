import useAuthCheck from "./useAuthCheck.utils.hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListDataRouter from "../router/router";

type UserType = "admin" | "user";

/* Cette fonction prend en parametre une string qui indique quel utilisateur est autorisé sur la page */
function useLockedPage(userTarget: UserType) {
    const { isLoggedIn, userInfo, isChecking } = useAuthCheck();
    const navigate = useNavigate();

    /* Détermination du rôle interdit et de la route de redirection */
    const userStranger: UserType = userTarget === "admin" ? "user" : "admin";
    const redirectRoute: string = userTarget === "admin" ? ListDataRouter[6].path : ListDataRouter[21].path;

    // Vérification du Role et de la connexion
    useEffect(() => {
        if (!isChecking && userInfo?.role === userStranger) {
            navigate(redirectRoute);
        }
  }, [isChecking, userInfo, navigate, redirectRoute, userStranger]);

    // En attente de vérification du token
    if (isChecking) return <p>Chargement...</p>;

    // Sécurité supplémentaire
    if (!isLoggedIn || !userInfo) return <p>Accès refusé</p>;
    
    return userInfo;
}

export default useLockedPage;
