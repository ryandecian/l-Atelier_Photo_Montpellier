import { Router } from "express";

/* Import des routers secondaires */
import userRouter from "./user.router";

/* Import des Controllers */
import login_controller from "../controllers/login.controller"; /* Vérification ok */
import logout_controller from "../controllers/logout.controller";
import registerController from "../controllers/user_controller/register.controller";

/* Import des Middlewares */
import RouteLimiterRequestIP from "../security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";

// Import des sub route indépendante !
import resetPasswordController from "../controllers/resetPasswordController";
import resetPasswordConfirmController from "../controllers/resetPasswordConfirmController";

const router = Router();

/* Redirection vers un router secondaire */
router.use("/user", userRouter); /* 6 routes fonctionnelles */


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

/* Register : Création d'un utilisateur */
/* URI : /register */
router.post("/register", RouteLimiterRequestIP, VerifyKeys(["firstname", "lastname", "email", "password"]),
    register_controller
);




/* Liste des routes ! */
router.use("/resetpassword", resetPasswordController); // 1 route fonctionnelle
router.use("/resetpassword/confirm", resetPasswordConfirmController); // 1 route fonctionnelle

export default router;
