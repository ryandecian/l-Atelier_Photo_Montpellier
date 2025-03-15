import express from "express";

const loginRouter = express.Router();

// Import des Middlewares : 
import RouteLimiterRequestIP from "../../Security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../../middleware/VerifyKeys/VerifyKeys";
import VerifyEmailTrue from "../../middleware/VerifyEmail/VerifyEmailTrue";
import VerifyPassword from "../../middleware/Argon/VerifyPassword";
import Create_JWT_Middleware from "../../middleware/JWT/Create_JWT_Middleware";
import loginPostResponse from "./loginResponse/loginPostResponse";

loginRouter.post("/", 
    RouteLimiterRequestIP,
    VerifyKeys(["email", "password"]),
    VerifyEmailTrue,
    VerifyPassword,
    Create_JWT_Middleware,
    loginPostResponse
)

export default loginRouter;