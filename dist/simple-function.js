// Regular Function
function sayHello(greet) {
    console.log(greet);
}
// Arrow Function
const sayHi = (greet) => {
    console.log(greet);
};
// Pass by Value and Pass by Reference
// Pass by Value
const x = 10;
function sum(x, y) {
    x++;
    return x + y;
}
console.log(`x awal= ${x}`); //10
console.log(`x di function sum x + y = `, sum(x, 5)); // 16
console.log(`x akhir= ${x}`); // 10
// Pass by Reference
//Object
const person = {
    name: 'Ani',
    age: 25
};
function changeName(person) {
    person.name = 'Ana';
    return person;
}
// console.log(person); // name: 'Ani', Age: 25
// const person2 = changeName(person);
// console.log(person2);
// console.log(person); // name: 'Ana', Age: 25 ?
// Pure Function ?
function changeName2(person) {
    return Object.assign(Object.assign({}, person), { name: 'Ana' });
}
console.log(person);
const person2 = changeName2(person);
console.log(person2);
console.log(person);
