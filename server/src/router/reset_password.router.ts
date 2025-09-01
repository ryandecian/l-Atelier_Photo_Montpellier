import { Router } from "express";

/* Import des Controllers */
import resetPassword_controller from "../controllers/reset_password_controller/resetPassword.controller";

/* Import des Middlewares */
import RouteLimiterRequestIP from "../security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";

const resetPasswordRouter = Router();

/* Route 1 */
/* Réinitialisation du mot de passe : enregistrement d'un token de réinitialisation */
/* URI : /reset-password */
resetPasswordRouter.post("/", RouteLimiterRequestIP, VerifyKeys(["email"]), 
    resetPassword_controller
);

export default resetPasswordRouter;
