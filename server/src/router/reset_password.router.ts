import { Router } from "express";

/* Import des Controllers */
import postResetPassword_controller from "../controllers/reset_password_controller/postResetPassword.controller";
import deleteUseResetPassword_controller from "../controllers/reset_password_controller/deleteUseResetPassword.controller";

/* Import des Middlewares */
import RouteLimiterRequestIP from "../security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";

const resetPasswordRouter = Router();

/* Route 1 */
/* Réinitialisation du mot de passe : enregistrement d'un token de réinitialisation */
/* URI : /reset-password */
resetPasswordRouter.post("/", RouteLimiterRequestIP, VerifyKeys(["email"]), 
    postResetPassword_controller
);

/* Route 2 */
/* Réinitialisation du mot de passe : utilisation du token et enregistrement du nouveau mot de passe */
/* URI : /reset-password/confirme */
resetPasswordRouter.post("/confirme", RouteLimiterRequestIP, VerifyKeys(["token", "newPassword"]), 
    deleteUseResetPassword_controller
);

export default resetPasswordRouter;
