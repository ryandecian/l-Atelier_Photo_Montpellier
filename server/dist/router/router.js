"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Import des sub route indépendante !
const loginRouter_1 = __importDefault(require("./loginRouter/loginRouter"));
const registerRouter_1 = __importDefault(require("./registerRouter/registerRouter"));
const resetPasswordRouter_1 = __importDefault(require("./resetPasswordRouter/resetPasswordRouter"));
const emailRouter_1 = __importDefault(require("./emailRouter/emailRouter"));
const albumRouter_1 = __importDefault(require("./albumRouter/albumRouter"));
const photosRouter_1 = __importDefault(require("./photosRouter/photosRouter"));
const facturesRouter_1 = __importDefault(require("./facturesRouter/facturesRouter"));
const usersRouter_1 = __importDefault(require("./usersRouter/usersRouter"));
const loginController_1 = __importDefault(require("../controllers/loginController"));
const registerController_1 = __importDefault(require("../controllers/registerController"));
const resetPasswordController_1 = __importDefault(require("../controllers/resetPasswordController"));
const resetPasswordConfirmController_1 = __importDefault(require("../controllers/resetPasswordConfirmController"));
const router = express_1.default.Router();
/* Liste des routes ! */
router.use("/login", loginRouter_1.default); // 1 route fonctionnelle
router.use("/register", registerRouter_1.default); // 1 route fonctionnelle
router.use("/reset-password", resetPasswordRouter_1.default); // 2 routes fonctionnelles
router.use("/email", emailRouter_1.default); // 1 route fonctionnelle
router.use("/album", albumRouter_1.default); // 4 routes fonctionnelles
router.use("/photos", photosRouter_1.default); // 3 routes fonctionnelles
router.use("/factures", facturesRouter_1.default); // 3 routes fonctionnelles
router.use("/users", usersRouter_1.default); // ? route fonctionnelle
router.use("/logincontroller", loginController_1.default); // 1 route fonctionnelle
router.use("/registercontroller", registerController_1.default); // 1 route fonctionnelle
router.use("/resetpasswordcontroller", resetPasswordController_1.default); // 1 route fonctionnelle
router.use("/resetpasswordconfirmcontroller", resetPasswordConfirmController_1.default); // 1 route fonctionnelle
exports.default = router;
