import { Router } from "express";

/* Import des Controllers */
import getOneTestController from "../controllers/userController/getOneTestController";

/* Import des Middlewares */
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";
import Verify_JWT_Middleware from "../middleware/JWT/Verify_JWT_Middleware";

const routerUser = Router();

routerUser.get("/test", getOneTestController);

export default routerUser;
