import express from 'express';

// Import des Middlewares : 
import RouteLimiterRequestIP from '../../Security/middlewareSecurity/RouteLimiterRequestIP';
import VerifyKeys from '../../middleware/VerifyKeys/VerifyKeys';
import VerifyEmailFalse from '../../middleware/VerifyEmail/VerifyEmailFalse';
import HashPassword from '../../middleware/Argon/HashPassword';
import InsertUser from '../../middleware/InsertDB/InsertUser';
import registerResponse from './registerResponse';

const registerRouter = express.Router();

registerRouter.post("/",
    RouteLimiterRequestIP,
    VerifyKeys(["firstname", "lastname", "email", "password"]),
    VerifyEmailFalse,
    HashPassword,
    InsertUser,
    registerResponse
)
export default registerRouter;