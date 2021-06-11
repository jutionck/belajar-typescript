"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorFunction_1 = require("./errorFunction");
const orderCoffe_1 = require("./orderCoffe");
orderCoffe_1.default('Latte', errorFunction_1.isError, (kopi) => {
    console.log(kopi);
    orderCoffe_1.default('Gren Tea', errorFunction_1.isError, (kopi) => {
        console.log(kopi);
        orderCoffe_1.default('Thai Tea', errorFunction_1.isError, (kopi) => {
            console.log(kopi);
            orderCoffe_1.default('Roti', errorFunction_1.isError, (kopi) => {
                console.log(kopi);
            });
        });
    });
});
