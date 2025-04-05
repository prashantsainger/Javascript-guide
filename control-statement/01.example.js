// -------------------type1---------------
// let ch = "a";
// if (ch == 'a') {
//     res = "V";
// } else if (ch == 'e') {
//     res = "V";
// } else if (ch == 'i') {
//     res = "V";
// } else if (ch == 'o') {
//     res = "V";
// } else if (ch == 'u') {
//     res = "V";
// } else {
//     res = "C";
// }
// console.log(res);
// ------------------------type1---end------------

// //  & , | , !
// ------------------type2---------------------
let ch = prompt('Enter Alphabet');

if (ch == 'a' | ch == 'e' | ch == 'i' | ch == 'o' | ch == 'u') {
    res = "V";
} else {
    res = "C";
}
document.write(`<h1>${res}</h1>`)
    // ---------------------type2 ----end-------------
    // --------------------example-1--------------------
let ch = prompt("Enter alphabet");


if (ch == 'a') {
    res = ["Apple", "images2.jpg"];
} else if (ch == 'b') {
    res = ['Ball', 'images.png'];

} else if (ch == 'c') {
    res = ['Cat', 'images3.jpg'];

} else {
    res = ['No Identify'];
}

document.write(`<img src = "${res[1]}">

<h1>${res[0]}</h1>`);


// -------------example-2-----------------------------
// ----------------------example-3--------------------


let id = prompt("Enter Your Id");
let Pass = prompt("Enter Your Password");
if (id == 'abc@gmail.com') {
    if (Pass == 'abc@123') {
        res = 'Login Succesfully';
    } else {
        res = 'Incorrect Password';
    }

} else {
    res = 'Id incorrect';
}
document.write(`<h1>${res}</h1>`);

// -------------------example-3-end---------------------
let data = prompt('Enter Colour')
if (data == 'all') {
    document.getElementById('all').style.display = 'flex';
    document.getElementById('red').style.display = 'flex';
    document.getElementById('green').style.display = 'flex';
    document.getElementById('yellow').style.display = 'flex';

} else if (data == 'red') {
    document.getElementById('red').style.display = 'block';
    document.getElementById('yellow').style.display = 'none';
    document.getElementById('green').style.display = 'none';
} else if (data == 'green') {
    document.getElementById('red').style.display = 'none';
    document.getElementById('green').style.display = 'block';
    document.getElementById('yellow').style.display = 'none';


} else if (data == 'yellow') {
    document.getElementById('red').style.display = 'none';
    document.getElementById('green').style.display = 'none';
    document.getElementById('yellow').style.display = 'block';
} else {

    document.write(`<h1>No Colour</h1>`);
}

// ------------example--3--end-----------------