// string : combination of character : "",'',``

// case 1

let msg1 = "Welcome to";
let msg2 = 'Ducat India';
let msg3 = `For Ui/Ux`;

console.log(msg1);
console.log(msg2);
console.log(msg3);

console.log(typeof msg1);
console.log(typeof msg2);
console.log(typeof msg3);

document.write("<h1>msg1</h1>");
document.write('<h1>msg1</h1>');
document.write(`<h1>${msg1}</h1>`);

// case 2
// Uncaught SyntaxError: missing ) after argument list
// console.log(msg1 msg2 msg3);

console.log(msg1, msg2, msg3);

// console.log(msg1 + msg2 + msg3);

document.write(msg1, msg2, msg3);

document.write('<hr>');

document.write("<h1>" + msg1 + " " + msg2 + " " + msg3 + "</h1>");

document.write('<hr>');

document.write(`<h1>${msg1} ${msg2} ${msg3}</h1>`);





