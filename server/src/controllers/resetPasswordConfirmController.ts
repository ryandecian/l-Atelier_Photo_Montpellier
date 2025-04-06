import express, {Request, Response} from 'express';

const resetPasswordConfirmController = express.Router();

// Import des Types :

// Import des Middlewares :
import RouteLimiterRequestIP from '../Security/middlewareSecurity/RouteLimiterRequestIP';
import VerifyKeys from '../middleware/VerifyKeys/VerifyKeys';

// Import des Repositories :

// Import des Services :

// Import des Outils :

// Vérification :
// URI : /api/resetpassword/confirm
resetPasswordConfirmController.post("/",

    // Vérification :
    RouteLimiterRequestIP,
    VerifyKeys(["token", "newPassword"]),
    
    async (req: Request, res: Response) => {
        try {}
        catch (error) {}
    });

export default resetPasswordConfirmController;
