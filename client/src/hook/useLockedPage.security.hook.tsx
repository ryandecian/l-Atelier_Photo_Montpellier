/* Import des composants React */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* Import des composants Router */
import router from "../router/router";

/* Import des Hooks */
import { useAuthCheck_Hook } from "./useAuthCheck.utils.hook";

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

type UserType = "admin" | "user" | "all";

/* Cette fonction prend en parametre une string qui indique quel utilisateur est autorisé sur la page */
function useLockedPage_Hook(userTarget: UserType) {
    const { isLoggedIn, userInfo, isChecking } = useAuthCheck_Hook();
    const navigate = useNavigate();

    /* Détermination des routes de redirection */
    const loginRoute: string = router[22].path;
    const adminRedirect: string = router[6].path;  /* Redirection si rôle admin requis mais non autorisé */
    const userRedirect: string = router[21].path;  /* Redirection si rôle user requis mais non autorisé */

    /* Vérification du Role et de la connexion */
    useEffect(() => {
        if (isChecking) return;

        /* Token client absent ou invalide = redirection sur la page login */
        if (!isLoggedIn || !userInfo) {
            navigate(loginRoute);
            return;
        }

        if (userTarget !== "all") {
            /* Est ce que le role interdit */
            /* Le role autorisé est admin ? Si oui le user est interdit sinon admin est interdit sur cette page */
            const userStranger: UserType = userTarget === "admin" ? "user" : "admin";
            const redirectRoute: string = userTarget === "admin" ? adminRedirect : userRedirect;

            /* Token valide mais l'utilisateur n'a pas le rôle requis = redirection sur sa page privée */
            if (userInfo.role === userStranger) {
                navigate(redirectRoute);
            }
        }
    }, [isChecking, isLoggedIn, userInfo, userTarget, navigate, loginRoute, adminRedirect, userRedirect]);

    /* En attente de vérification du token */
    if (isChecking) return null;

    /* Sécurité supplémentaire */
    if (!isLoggedIn || !userInfo) return null; /* Si non connecté et pas de données utilisateur */

    /* Retourne les datas utilisateur */
    return userInfo;
}

export { useLockedPage_Hook };

/**
  Exemple d’utilisation :

  - Page admin seulement :
    const userInfo = useLockedPage_Hook("admin");

  - Page user seulement :
    const userInfo = useLockedPage_Hook("user");

  - Page accessible à tout utilisateur connecté (admin ou user) :
    const userInfo = useLockedPage_Hook("all");
 */
