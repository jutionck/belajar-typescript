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
const orderCoffe_1 = require("./orderCoffe");
const pesanan = (coffeName) => new Promise((resolve, reject) => {
    orderCoffe_1.default(coffeName, reject, resolve);
});
function pesananKopi() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const latte = yield pesanan('Latte');
            console.log(latte);
            const greenTea = yield pesanan('Green Tea');
            console.log(greenTea);
            const thaiTea = yield pesanan('Thai Tea');
            console.log(thaiTea);
            const roti = yield pesanan('Roti');
            console.log(roti);
            //Gak ada di warung kopi
            const golok = yield pesanan('Golok');
            console.log(golok);
        }
        catch (error) {
            console.error(error);
        }
    });
}
pesananKopi();
