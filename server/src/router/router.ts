import express from "express";

// Import des sub route indépendante !
import loginRouter from "./loginRouter/loginRouter";
import registerRouter from "./registerRouter/registerRouter";
import resetPasswordRouter from "./resetPasswordRouter/resetPasswordRouter";
import emailRouter from "./emailRouter/emailRouter";

const router = express.Router();

/* Liste des routes ! */
router.use("/login", loginRouter); // 1 route fonctionnelle
router.use("/register", registerRouter); // 1 route fonctionnelle
router.use("/reset-password", resetPasswordRouter); // 2 routes fonctionnelles
router.use("/email", emailRouter); // 1 route fonctionnelle

export default router;