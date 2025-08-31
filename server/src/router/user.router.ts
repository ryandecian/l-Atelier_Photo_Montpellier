import { Router } from "express";

/* Import des Controllers */
import getAllUser_controller from "../controllers/userController/getAllUser.controller";
import getOneUserById_controller from "../controllers/userController/getOneUserById.controller";
import getMeUser_controller from "../controllers/userController/getMeUser.controller";
import putMeUser_controller from "../controllers/userController/putMeUser.controller";
import putOneUser_controller from "../controllers/userController/putOneUser.controller";
import deleteOneUser_controller from "../controllers/userController/deleteOneUser.controller";

/* Import des Middlewares */
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";
import Verify_JWT_Middleware from "../middleware/JWT/Verify_JWT_Middleware";
import isAdmin_Middleware from "../middleware/isAdmin/isAdmin_Middleware";

const userRouter = Router();

/* Route 1 */
/* Récupération de tous les utilisateurs en tant qu'admin */
/* URI : /user */
userRouter.get("/", Verify_JWT_Middleware, isAdmin_Middleware,
    getAllUser_controller
);

/* Route 2 */
/* Récupérer les données d'un utilisateur en tant qu'admin via l'id */
/* URI : /user/:id */
userRouter.get("/:id", Verify_JWT_Middleware, isAdmin_Middleware,
    getOneUserById_controller
);

/* Route 3 */
/* Récupération de ses propre données utilisateurs */
/* URI : /user/me */
userRouter.get("/me", Verify_JWT_Middleware,
    getMeUser_controller
);

/* Route 4 */
/* Modification de ses propre données utilisateurs */
/* URI : /user/me */
userRouter.put("/me", VerifyKeys(["firstname", "lastname", "email"]), Verify_JWT_Middleware,
    putMeUser_controller
);

/* Route 5 */
/* Modifier les données utilisateurs en tant qu'admin */
userRouter.put("/:id", VerifyKeys(["id", "firstname", "lastname", "email"]), Verify_JWT_Middleware, isAdmin_Middleware,
    putOneUser_controller
);

/* Route 6 */
/* Suppression d'un utilisateur en tant qu'admin */
/* URI : /user */
userRouter.delete("/", VerifyKeys(["id"]), Verify_JWT_Middleware, isAdmin_Middleware,
    deleteOneUser_controller
);

export default userRouter;
