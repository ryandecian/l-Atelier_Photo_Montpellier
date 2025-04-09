"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emailRouter = express_1.default.Router();
// Import des Middlewares :
const VerifyKeys_1 = __importDefault(require("../../middleware/VerifyKeys/VerifyKeys"));
const SendMailer_Middleware_1 = __importDefault(require("../../services/mailer/SendMailer_Middleware"));
const emailPostResponse_1 = __importDefault(require("./emailResponse/emailPostResponse"));
// URI : /api/email
emailRouter.post("/", (0, VerifyKeys_1.default)(["to", "subject", "text"]), SendMailer_Middleware_1.default, emailPostResponse_1.default);
exports.default = emailRouter;
