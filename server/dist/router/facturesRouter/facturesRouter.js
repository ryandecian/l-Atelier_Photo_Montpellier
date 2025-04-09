"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const facturesRouter = express_1.default.Router();
//import des Middlewares :
const facturesGetResponse_1 = __importDefault(require("./facturesResponse/facturesGetResponse"));
const facturesPostResponse_1 = __importDefault(require("./facturesResponse/facturesPostResponse"));
const facturesDeleteResponse_1 = __importDefault(require("./facturesResponse/facturesDeleteResponse"));
// URI : /api/factures
facturesRouter.get("/", facturesGetResponse_1.default);
// URI : /api/factures/upload
facturesRouter.post("/upload", facturesPostResponse_1.default);
// URI : /api/factures/:id
facturesRouter.delete("/:id", facturesDeleteResponse_1.default);
exports.default = facturesRouter;
