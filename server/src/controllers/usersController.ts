import express, { Request, Response } from "express";

const usersController = express.Router();

// Import des dépendances externes :
// import jwt from "jsonwebtoken";
// import { RowDataPacket } from "mysql2";

// Import des Middlewares :
// import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";

// Import des Repositories :
// import verifyEmailTrueRepository from "../repository/emailRepository";

// Import des Types :
// import payloadType from "../types/payloadType";

// Import des utils
// import { verifyPasswordArgonUtils } from "../utils/hashArgonUtils";
// import { createDate_Number_Utils } from "../utils/createDateUtils";

usersController.get("/", 
    
    (req: Request, res: Response) => {});