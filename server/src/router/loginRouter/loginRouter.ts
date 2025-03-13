import express from "express";

// Import des Middlewares : 
import RouteLimiterRequestIP from "../../Security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../../middleware/VerifyKeys/VerifyKeys";
import VerifyEmailTrue from "../../middleware/VerifyEmail/VerifyEmailTrue";
import VerifyPassword from "../../middleware/Argon/VerifyPassword";
import Create_JWT_Middleware from "../../middleware/JWT/Create_JWT_Middleware";
import loginResponse from "./loginResponse";

const loginRouter = express.Router();

loginRouter.post("/", 
    RouteLimiterRequestIP,
    VerifyKeys(["email", "password"]),
    VerifyEmailTrue,
    VerifyPassword,
    Create_JWT_Middleware,
    loginResponse
)

export default loginRouter;