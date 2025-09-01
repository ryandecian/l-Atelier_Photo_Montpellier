import { Router } from "express";

/* Import des routers secondaires */
import userRouter from "./user.router";
import resetPasswordRouter from "./reset_password.router";

/* Import des Controllers */
import login_controller from "../controllers/login.controller"; /* Vérification ok */
import logout_controller from "../controllers/logout.controller";

/* Import des Middlewares */
import RouteLimiterRequestIP from "../security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";

const router = Router();


/* Redirection vers un router secondaire */
router.use("/user", userRouter); /* 7 routes fonctionnelles */
router.use("/reset-password", resetPasswordRouter); /* 2 routes fonctionnelles */


/* Redirection directe vers un controller */

/* Login : Connexion de l'utilisateur */
/* URI : /login */
router.post("/login", RouteLimiterRequestIP, VerifyKeys(["email", "password"]),
    login_controller
);

/* Déconnexion : Déconnexion de l'utilisateur */
/* URI : /logout */
router.post("/logout",
    logout_controller
);

export default router;
