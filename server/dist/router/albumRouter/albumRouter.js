"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const albumRouter = express_1.default.Router();
const Verify_JWT_Middleware_1 = __importDefault(require("../../middleware/JWT/Verify_JWT_Middleware"));
const VerifyAlbum_1 = __importDefault(require("../../middleware/VerifyAlbum/VerifyAlbum"));
const albumGetResponse_1 = __importDefault(require("./albumResponse/albumGetResponse"));
const albumPostResponse_1 = __importDefault(require("./albumResponse/albumPostResponse"));
const albumPutResponse_1 = __importDefault(require("./albumResponse/albumPutResponse"));
const albumDeleteResponse_1 = __importDefault(require("./albumResponse/albumDeleteResponse"));
// URI : /api/album
albumRouter.get("/", Verify_JWT_Middleware_1.default, VerifyAlbum_1.default, albumGetResponse_1.default);
// URI : /api/album
albumRouter.post("/", albumPostResponse_1.default);
// URI : /api/album/:id
albumRouter.put("/:id", albumPutResponse_1.default);
// URI : /api/album/:id
albumRouter.delete("/:id", albumDeleteResponse_1.default);
exports.default = albumRouter;
