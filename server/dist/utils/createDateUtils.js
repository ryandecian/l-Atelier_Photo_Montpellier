"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpireDateUtils = createExpireDateUtils;
exports.createDate_Number_Utils = createDate_Number_Utils;
function createExpireDateUtils() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Date(Date.now() + 3600000); // Expiration dans 1h
    });
}
function createDate_Number_Utils() {
    return __awaiter(this, void 0, void 0, function* () {
        const dateNow = Math.floor(Date.now() / 1000); // Date actuelle
        return dateNow; // Date actuelle en timestamp UNIX
    });
}
