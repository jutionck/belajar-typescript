"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderCoffe_1 = require("./orderCoffe");
const pesanan = (coffeName) => new Promise((resolve, reject) => {
    orderCoffe_1.default(coffeName, reject, resolve);
});
pesanan('Robusta')
    .then((coffee) => {
    console.log(coffee);
})
    .catch((error) => {
    console.error(error);
});
