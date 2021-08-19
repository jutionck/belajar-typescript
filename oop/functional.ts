// Pure Functions
let num = 123;

function toString(val: any) {
  return val.toString();
}

const str = toString(num);
console.log(typeof str);


// Immutable Data
const data = Object.freeze([1, 2, 3, 4, 5, 6]);

// Functions as Arguments
const addSymbol = (val: any) => toString(val) + '@@';

const symbolData = data.map(addSymbol);
console.log(symbolData);


