function hello() {
    return "<h1>Hello User</h1>";
}

function hello() {
    return "<h1>Hello Admin</h1>";
}

document.write(hello());


let hello1 = function() { return "Hello User" };
let hello2 = function() { return "Hello Admin" };
console.log(hello1());
console.log(hello2());




//  arrow function

let hello3 = () => "Hello User";
let hello4 = () => "Hello Admin";
console.log(hello3());
console.log(hello4());