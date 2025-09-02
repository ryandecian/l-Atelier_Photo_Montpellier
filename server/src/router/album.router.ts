import { Router } from "express";

/* Import des Controllers */
import getAllAlbums_controller from "../controllers/album_controller/getAllAlbums.controller";
import getMyAlbums_controller from "../controllers/album_controller/getMyAlbums.controller";
import getOneAlbum_controller from "../controllers/album_controller/getOneAlbum.controller";

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

/* Route 2 */
/* Récupération de mes albums */
/* URI : /album/my */
albumRouter.get("/my", Verify_JWT_Middleware,
    getMyAlbums_controller
);

/* Route 3 */
/* Récupération d'un album par son ID */
/* URI : /album/:id */
albumRouter.get("/:id", Verify_JWT_Middleware, isAdmin_Middleware,
    getOneAlbum_controller
);

export default albumRouter;
