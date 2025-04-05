// ---------type-1----------

let hello1 = function() {
    return "<h1>Hello User</h1>"
};
document.write(hello1());

let hello2 = function() {
    return "<h1>Hello User</h1>"
};
document.write(hello2());
// ------------type-1--end-----------
// ---------------------type-2---------------
let hello3 = function() {
    return "<h1>Hello User</h1>"
};
let hello4 = function() {
    return "<h1>Hello User</h1>"
};
document.write(hello3());
document.write(hello4());

// ---------------------type-2--end-------------


// ----------------shorthand------ arrow-function-------

let hello5 = () => "Hello User";
let hello6 = () => "Hello Admin";

document.write(hello5());
document.write(hello6());