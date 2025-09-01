import { Router } from "express";

/* Import des Controllers */
import getAllAlbums_controller from "../controllers/album_controller/getAllAlbums.controller";

/* Import des Middlewares */

const albumRouter = Router();

/* Route 1 */
/* Récupération de tous les albums */
/* URI : /album */
albumRouter.get("/", 
    getAllAlbums_controller
);

export default albumRouter;
