import express from "express";

const usersRouter = express.Router();

// Import des Middlewares :

// URI : /api/user
usersRouter.get("/", (req, res) => {})

export default usersRouter;