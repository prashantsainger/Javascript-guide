// function hello() {
//     // title = `Ducat India ${city}`;
//     // title = ['user1', 'user2', 'user3'];
//     title = {
//         user1: "Punit",
//         user2: "Rohit",
//         user3: "Rohan"
//     }
//     return title;
// }
// // console.log(hello("Delhi"));
// // let arr = hello();
// let obj = hello();
// // console.log(arr);
// // document.write(`<h1>${arr[0]}</h1>`);
// // document.write(`<h2>${arr[1]}</h2>`);
// // document.write(`<h3>${arr[2]}</h3>`);

// document.write(`<h1>${obj.user1}</h1>`);
// document.write(`<h2>${obj.user2}</h2>`);
// document.write(`<h3>${obj.user3}</h3>`);

function hello(){

    title = {
        user1: 'Arun',
        user2: 'Pandit',
        user3: 'Somesh'
    }
    return title;
}
let obj = hello();
console.log(obj);

document.write(`<h1>${obj.user1}</h1>`);
document.write(`<h1>${obj.user2}</h1>`);
document.write(`<h1>${obj.user3}</h1>`);

