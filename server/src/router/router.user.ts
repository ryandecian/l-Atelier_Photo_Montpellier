import { Router } from "express";

/* Import des Controllers */
import getOneTestController from "../controllers/userController/getOneTestController";
import getAllUser_controller from "../controllers/userController/getAllUser.controller";

/* Import des Middlewares */
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";
import Verify_JWT_Middleware from "../middleware/JWT/Verify_JWT_Middleware";
import isAdmin_Middleware from "../middleware/isAdmin/isAdmin_Middleware";

const routerUser = Router();

routerUser.get("/test", getOneTestController);

/* Récupération de tous les utilisateurs en tant qu'admin */
/* URI : /api/user */
routerUser.get("/", Verify_JWT_Middleware, isAdmin_Middleware,
    getAllUser_controller
);

export default routerUser;
