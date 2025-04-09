"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRouter = express_1.default.Router();
// Import des Middlewares : 
const RouteLimiterRequestIP_1 = __importDefault(require("../../Security/middlewareSecurity/RouteLimiterRequestIP"));
const VerifyKeys_1 = __importDefault(require("../../middleware/VerifyKeys/VerifyKeys"));
const VerifyEmailTrue_1 = __importDefault(require("../../middleware/VerifyEmail/VerifyEmailTrue"));
const VerifyPassword_1 = __importDefault(require("../../middleware/Argon/VerifyPassword"));
const Create_JWT_Middleware_1 = __importDefault(require("../../middleware/JWT/Create_JWT_Middleware"));
const loginPostResponse_1 = __importDefault(require("./loginResponse/loginPostResponse"));
// URI : /api/login
loginRouter.post("/", RouteLimiterRequestIP_1.default, (0, VerifyKeys_1.default)(["email", "password"]), VerifyEmailTrue_1.default, VerifyPassword_1.default, Create_JWT_Middleware_1.default, loginPostResponse_1.default);
exports.default = loginRouter;
