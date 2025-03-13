import express from "express";

// Import des sub route indépendante !
import loginRouter from "./loginRouter/loginRouter";
import registerRouter from "./registerRouter/registerRouter";

const router = express.Router();

/* Liste des routes ! */
router.use("/login", loginRouter);
router.use("/register", registerRouter);

export default router;