import useAuthCheck from "./useAuthCheck.utils.hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListDataRouter from "../router/router";

/**
 * Documentation : 
 * 
 * Ce Hook permet le verrouillage d'une page et vérifier : 
 *  - Si l'utilisateur est connecté
 *  - Si le token client est présent
 *  - Si le token client est valide et non expiré
 *  - Si l'utilisateur connecté à le droit d'accès à la page
 *  
 * Si l'utilisateur n'a pas le droit d'accès 2 possibilités : 
 *  - Token client absent ou invalide = redirection sur la page login
 *  - Token valide mais l'utilisateur n'a pas le rôle requis = redirection sur sa page privée
 */

type UserType = "admin" | "user";

/* Cette fonction prend en parametre une string qui indique quel utilisateur est autorisé sur la page */
function useLockedPage(userTarget: UserType) {
    const { isLoggedIn, userInfo, isChecking } = useAuthCheck();
    const navigate = useNavigate();

    /* Détermination du rôle interdit et de la route de redirection */
    const userStranger: UserType = userTarget === "admin" ? "user" : "admin"; /* Est ce que le role autorisé est admin ? Si oui user est interdit, sinon admin est interdit */
    const redirectRoute: string = userTarget === "admin" ? ListDataRouter[6].path : ListDataRouter[21].path;

    /* Vérification du Role et de la connexion */
    useEffect(() => {
        if (!isChecking && userInfo?.role === userStranger) {
            navigate(redirectRoute);
        }
  }, [isChecking, userInfo, navigate, redirectRoute, userStranger]);

    /* En attente de vérification du token */
    if (isChecking) return null;

    /* Sécurité supplémentaire */
    if (!isLoggedIn || !userInfo) return null; /* Si non connecté et  */
    
    /* Retourne les datas utilisateur */
    return userInfo;
}

export default useLockedPage;

/**
  Notice d'utilisation :

  import useLockedPage from "../../hook/useLockedPage.security.hook";

  const userInfo = useLockedPage("admin");
  if (!userInfo) return <p>Chargement...</p>;
 */