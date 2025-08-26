import express from "express";

// Import des sub route indépendante !
import registerRouter from "./registerRouter/registerRouter";
import resetPasswordRouter from "./resetPasswordRouter/resetPasswordRouter";
import emailRouter from "./emailRouter/emailRouter";
import albumRouter from "./albumRouter/albumRouter";
import photosRouter from "./photosRouter/photosRouter";
import facturesRouter from "./facturesRouter/facturesRouter";
import usersRouter from "./usersRouter/usersRouter";

import loginController from "../controllers/loginController"; /* Vérification ok */
import registerController from "../controllers/registerController";
import resetPasswordController from "../controllers/resetPasswordController";
import resetPasswordConfirmController from "../controllers/resetPasswordConfirmController";
import usersController from "../controllers/usersController";
import logoutController from "../controllers/logoutController"; /* Vérification ok */

const router = express.Router();

/* Liste des routes ! */
router.use("/email", emailRouter); // 1 route fonctionnelle
router.use("/album", albumRouter); // 4 routes fonctionnelles
router.use("/photos", photosRouter); // 3 routes fonctionnelles
router.use("/factures", facturesRouter); // 3 routes fonctionnelles

router.use("/login", loginController); // 1 route fonctionnelle
router.use("/register", registerController); // 1 route fonctionnelle
router.use("/resetpassword", resetPasswordController); // 1 route fonctionnelle
router.use("/resetpassword/confirm", resetPasswordConfirmController); // 1 route fonctionnelle
router.use("/users", usersController); // 5 routes fonctionnelles
router.use("/logout", logoutController); // 1 route fonctionnelle

export default router;
