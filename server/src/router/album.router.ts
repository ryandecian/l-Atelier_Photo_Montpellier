import { Router } from "express";

/* Import des Controllers */
import getAllAlbum_controller from "../controllers/album_controller/getAllAlbum.controller";

/* Import des Middlewares */

const albumRouter = Router();

/* Route 1 */
/* Récupération de tous les albums */
/* URI : /album */
albumRouter.get("/", 
    getAllAlbum_controller
);

export default albumRouter;
