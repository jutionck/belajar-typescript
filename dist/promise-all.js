"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorFunction_1 = require("./errorFunction");
const orderCoffe_1 = require("./orderCoffe");
const pesanan = (coffeName) => new Promise((resolve, reject) => {
    orderCoffe_1.default(coffeName, reject, resolve);
});
Promise.all([
    pesanan('Latte'),
    pesanan('Gren Tea'),
    pesanan('Thai Tea'),
    pesanan('Roti'),
    pesanan('Golok')
])
    .then((semuaPesanan) => {
    for (const pesanan of semuaPesanan) {
        console.log(pesanan);
    }
})
    .catch((errorFunction_1.isError));
// async await
