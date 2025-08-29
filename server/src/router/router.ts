import { Router } from "express";

// Import des sub route indépendante !
import loginController from "../controllers/loginController"; /* Vérification ok */
import registerController from "../controllers/registerController";
import resetPasswordController from "../controllers/resetPasswordController";
import resetPasswordConfirmController from "../controllers/resetPasswordConfirmController";
import usersController from "../controllers/usersController";
import logoutController from "../controllers/logoutController"; /* Vérification ok */
import routerUser from "./router.user";

const router = Router();

router.use("/user", routerUser);

/* Liste des routes ! */
router.use("/login", loginController); // 1 route fonctionnelle
router.use("/register", registerController); // 1 route fonctionnelle
router.use("/resetpassword", resetPasswordController); // 1 route fonctionnelle
router.use("/resetpassword/confirm", resetPasswordConfirmController); // 1 route fonctionnelle
router.use("/users", usersController); // 5 routes fonctionnelles
router.use("/logout", logoutController); // 1 route fonctionnelle

export default router;
