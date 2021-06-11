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
exports.Kulkas = exports.Action = void 0;
const isiKulkas = ['telur', 'ayam', 'sayuran', 'sirup', 'buah', 'es krim', 'ikan', 'daging', 'puding'];
const { log } = console;
function randomTimeout(minSeconds, maxSeconds) {
    minSeconds = Math.ceil(minSeconds);
    maxSeconds = Math.floor(maxSeconds);
    return (Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds) * 1000;
}
class Action {
    constructor(isiKulkas) {
        this.isiKulkas = isiKulkas;
    }
    lihat() {
        return __awaiter(this, void 0, void 0, function* () {
            log('Melihat isi kulkas...');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (this.isiKulkas.length === 0) {
                        reject('Isi kulkas kosong.\n');
                    }
                    else {
                        resolve(`Kulkas berisi ${this.isiKulkas.length} item, yaitu: ${this.isiKulkas.join(', ')}.\n`);
                    }
                }, randomTimeout(1, 3));
            });
        });
    }
    ambil(namaItem) {
        return __awaiter(this, void 0, void 0, function* () {
            log(`Mengambil item ${namaItem}...`);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const item = this.isiKulkas.find((item) => item === namaItem);
                    this.isiKulkas = this.isiKulkas.filter((item) => item !== namaItem);
                    if (!item) {
                        reject(`Item ${namaItem} tidak ada.\n`);
                    }
                    else {
                        resolve(`Item ${item} sudah diambil.\n`);
                    }
                }, randomTimeout(1, 3));
            });
        });
    }
    simpan(item) {
        return __awaiter(this, void 0, void 0, function* () {
            log(`Menyimpan item ${item}...`);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.isiKulkas.push(item);
                    this.isiKulkas.sort();
                    resolve(`Item ${item} sudah disimpan.\n`);
                }, randomTimeout(1, 3));
            });
        });
    }
}
exports.Action = Action;
class Kulkas {
    constructor() {
        this.actions = new Action(isiKulkas);
    }
    buka() {
        return __awaiter(this, void 0, void 0, function* () {
            log('Membuka kulkas...');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    log('Kulkas dibuka.\n');
                    resolve(this.actions);
                }, randomTimeout(1, 3));
            });
        });
    }
    tutup() {
        return __awaiter(this, void 0, void 0, function* () {
            log(`Kulkas sudah ditutup.`);
        });
    }
}
exports.Kulkas = Kulkas;
