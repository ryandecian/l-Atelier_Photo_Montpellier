import { Router } from "express";

/* Import des Controllers */
import getAllAlbums_controller from "../controllers/album_controller/getAllAlbums.controller";
import getMyAlbums_controller from "../controllers/album_controller/getMyAlbums.controller";
import getOneAlbumById_controller from "../controllers/album_controller/getOneAlbumById.controller";

/* Import des Middlewares */
import Verify_JWT_Middleware from "../middleware/JWT/Verify_JWT_Middleware";
import isAdmin_Middleware from "../middleware/isAdmin/isAdmin_Middleware";

const albumRouter = Router();

/* Route 1 */
/* Récupération de tous les albums en tant qu'admin */
/* URI : /album */
albumRouter.get("/", Verify_JWT_Middleware, isAdmin_Middleware,
    getAllAlbums_controller
);

/* Route 2 */
/* Récupération des albums de l'utilisateur connecté non admin */
/* URI : /album/my */
albumRouter.get("/my", Verify_JWT_Middleware,
    getMyAlbums_controller
);

/* Route 3 */
/* Récupération d'un album par son ID en tant qu'admin */
/* URI : /album/:id */
albumRouter.get("/:id", Verify_JWT_Middleware, isAdmin_Middleware,
    getOneAlbumById_controller
);

export default albumRouter;
