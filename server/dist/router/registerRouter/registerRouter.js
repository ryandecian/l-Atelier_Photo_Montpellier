"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerRouter = express_1.default.Router();
// Import des Middlewares : 
const RouteLimiterRequestIP_1 = __importDefault(require("../../Security/middlewareSecurity/RouteLimiterRequestIP"));
const VerifyKeys_1 = __importDefault(require("../../middleware/VerifyKeys/VerifyKeys"));
const VerifyEmailFalse_1 = __importDefault(require("../../middleware/VerifyEmail/VerifyEmailFalse"));
const HashPassword_1 = __importDefault(require("../../middleware/Argon/HashPassword"));
const InsertUser_1 = __importDefault(require("../../middleware/InsertDB/InsertUser"));
const registerPostResponse_1 = __importDefault(require("./registerResponse/registerPostResponse"));
// URI : /api/register
registerRouter.post("/", RouteLimiterRequestIP_1.default, (0, VerifyKeys_1.default)(["firstname", "lastname", "email", "password"]), VerifyEmailFalse_1.default, HashPassword_1.default, InsertUser_1.default, registerPostResponse_1.default);
exports.default = registerRouter;
