"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderCoffee = (coffeName, callbackError, callbackSuccess) => {
    let coffee = null;
    console.log('Sedang membuat kopi, silakan tunggu...');
    setTimeout(() => {
        if (coffeName == 'Golok') {
            callbackError(`${coffeName} tidak dijual disini..!`);
        }
        else {
            coffee = `${coffeName} sudah jadi!`;
            callbackSuccess(coffee);
        }
    }, 5000);
    return coffee;
};
exports.default = orderCoffee;
// Callback terima 2, 1. error, 2. success
