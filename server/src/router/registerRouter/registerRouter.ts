import express from 'express';

const registerRouter = express.Router();

// Import des Middlewares : 
import RouteLimiterRequestIP from '../../securitys/middlewareSecurity/RouteLimiterRequestIP';
import VerifyKeys from '../../middleware/VerifyKeys/VerifyKeys';
import VerifyEmailFalse from '../../middleware/VerifyEmail/VerifyEmailFalse';
import HashPassword from '../../middleware/Argon/HashPassword';
import InsertUser from '../../middleware/InsertDB/InsertUser';
import registerPostResponse from './registerResponse/registerPostResponse';

// URI : /api/register
registerRouter.post("/",
    RouteLimiterRequestIP,
    VerifyKeys(["firstname", "lastname", "email", "password"]),
    VerifyEmailFalse,
    HashPassword,
    InsertUser,
    registerPostResponse
)

export default registerRouter;
