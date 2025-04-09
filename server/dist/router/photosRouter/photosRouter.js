"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const photosRouter = express_1.default.Router();
// Import des Middlewares :
const photosGetResponse_1 = __importDefault(require("./photosResponse/photosGetResponse"));
const photosPostResponse_1 = __importDefault(require("./photosResponse/photosPostResponse"));
const photosDeleteResponse_1 = __importDefault(require("./photosResponse/photosDeleteResponse"));
// URI : /api/photos
photosRouter.get("/", photosGetResponse_1.default);
// URI : /api/photos/upload
photosRouter.post("/upload", photosPostResponse_1.default);
// URI : /api/photos/:id
photosRouter.delete("/:id", photosDeleteResponse_1.default);
exports.default = photosRouter;
