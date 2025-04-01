import express from "express";

// Import des sub route indépendante !
import loginRouter from "./loginRouter/loginRouter";
import registerRouter from "./registerRouter/registerRouter";
import resetPasswordRouter from "./resetPasswordRouter/resetPasswordRouter";
import emailRouter from "./emailRouter/emailRouter";
import albumRouter from "./albumRouter/albumRouter";
import photosRouter from "./photosRouter/photosRouter";
import facturesRouter from "./facturesRouter/facturesRouter";
import usersRouter from "./usersRouter/usersRouter";

import loginController from "../controllers/loginController";

const router = express.Router();

/* Liste des routes ! */
router.use("/login", loginRouter); // 1 route fonctionnelle
router.use("/register", registerRouter); // 1 route fonctionnelle
router.use("/reset-password", resetPasswordRouter); // 2 routes fonctionnelles
router.use("/email", emailRouter); // 1 route fonctionnelle
router.use("/album", albumRouter); // 4 routes fonctionnelles
router.use("/photos", photosRouter); // 3 routes fonctionnelles
router.use("/factures", facturesRouter); // 3 routes fonctionnelles
router.use("/users", usersRouter); // ? route fonctionnelle

router.use("/logincontroller", loginController); // 1 route fonctionnelle

export default router;
