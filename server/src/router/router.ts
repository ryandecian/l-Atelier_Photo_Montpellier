import express from "express";

// Import des sub route indépendante !
import loginRouter from "./loginRouter/loginRouter";
import { log } from "console";

const router = express.Router();

router.use("/login", loginRouter);

export default router;