import { Router } from "express";

/* Import des routers secondaires */
import userRouter from "./user.router";

/* Import des Controllers */
import login_controller from "../controllers/login.controller"; /* Vérification ok */
import logout_controller from "../controllers/logout.controller";

/* Import des Middlewares */
import RouteLimiterRequestIP from "../security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";

// Import des sub route indépendante !
import resetPasswordController from "../controllers/resetPasswordController";
import resetPasswordConfirmController from "../controllers/resetPasswordConfirmController";

const router = Router();

/* Redirection vers un router secondaire */
router.use("/user", userRouter); /* 7 routes fonctionnelles */


/* Redirection directe vers un controller */

/* Login : Connexion de l'utilisateur */
/* URI : /login */
router.get("/login", RouteLimiterRequestIP, VerifyKeys(["email", "password"]),
    login_controller
);

/* Déconnexion : Déconnexion de l'utilisateur */
/* URI : /logout */
router.post("/logout",
    logout_controller
);





/* Liste des routes ! */
router.use("/resetpassword", resetPasswordController); // 1 route fonctionnelle
router.use("/resetpassword/confirm", resetPasswordConfirmController); // 1 route fonctionnelle

export default router;
