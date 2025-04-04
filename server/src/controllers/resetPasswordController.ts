import express, { Request, Response } from "express";

const resetPasswordController = express.Router();

// Import des dépendances externes :

// Import des Middlewares :

// Import des Repositories :

// URI : /api/reset-password
resetPasswordController.post("/",

    async (req: Request, res: Response) => {}
)

export default resetPasswordController;