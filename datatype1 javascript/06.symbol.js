const mySymbol = Symbol("Ducat");

console.log(mySymbol)

const symbol1 = Symbol('mySymbol');

const symbol2 = Symbol('mySymbol');

console.log(symbol1 === symbol2); // false