import { Router } from "express";

/* Import des routers secondaires */
import userRouter from "./user.router";

/* Import des Controllers */
import login_controller from "../controllers/login.controller"; /* Vérification ok */

/* Import des Middlewares */
import RouteLimiterRequestIP from "../security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";

// Import des sub route indépendante !
import registerController from "../controllers/registerController";
import resetPasswordController from "../controllers/resetPasswordController";
import resetPasswordConfirmController from "../controllers/resetPasswordConfirmController";
import logoutController from "../controllers/logoutController"; /* Vérification ok */

const router = Router();

/* Redirection vers un router secondaire */
router.use("/user", userRouter); /* 6 routes fonctionnelles */


/* Redirection directe vers un controller */

/* Login : Connexion de l'utilisateur */
/* URI : /login */
router.get("/login", RouteLimiterRequestIP, VerifyKeys(["email", "password"]),
    login_controller
);






/* Liste des routes ! */
router.use("/register", registerController); // 1 route fonctionnelle
router.use("/resetpassword", resetPasswordController); // 1 route fonctionnelle
router.use("/resetpassword/confirm", resetPasswordConfirmController); // 1 route fonctionnelle
router.use("/logout", logoutController); // 1 route fonctionnelle

export default router;
