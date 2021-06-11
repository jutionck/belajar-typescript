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
const kulkas_1 = require("./kulkas");
const { log } = console;
function mulai() {
    return __awaiter(this, void 0, void 0, function* () {
        const kulkas = new kulkas_1.Kulkas();
        const action = yield kulkas.buka();
        log(yield action.lihat());
        log(yield action.simpan('gajah'));
        log(yield action.lihat());
        log(yield action.ambil('gajah'));
        log(yield action.lihat());
        try {
            log(yield action.ambil('gajah'));
        }
        catch (error) {
            log(error);
        }
        yield kulkas.tutup();
    });
}
mulai();
