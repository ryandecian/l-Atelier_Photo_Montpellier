import { Router } from "express";

/* Import des Controllers */
import getAllUser_controller from "../controllers/userController/getAllUser.controller";
import getMeUser_controller from "../controllers/userController/getMeUser.controller";

/* Import des Middlewares */
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";
import Verify_JWT_Middleware from "../middleware/JWT/Verify_JWT_Middleware";
import isAdmin_Middleware from "../middleware/isAdmin/isAdmin_Middleware";

const userRouter = Router();


/* Récupération de tous les utilisateurs en tant qu'admin */
/* URI : /api/user */
userRouter.get("/", Verify_JWT_Middleware, isAdmin_Middleware,
    getAllUser_controller
);

/* Récupération de ses propre données utilisateurs */
/* URI : /api/users/me */
userRouter.get("/me", Verify_JWT_Middleware,
    getMeUser_controller
);

export default userRouter;
