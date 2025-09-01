import { Router } from "express";

/* Import des Controllers */
import getAllAlbums_controller from "../controllers/album_controller/getAllAlbums.controller";

/* Import des Middlewares */
import Verify_JWT_Middleware from "../middleware/JWT/Verify_JWT_Middleware";
import isAdmin_Middleware from "../middleware/isAdmin/isAdmin_Middleware";

const albumRouter = Router();

/* Route 1 */
/* Récupération de tous les albums */
/* URI : /album */
albumRouter.get("/", Verify_JWT_Middleware, isAdmin_Middleware,
    getAllAlbums_controller
);

export default albumRouter;
