// -------------type--1---------------



// class user {
//     user = "user 1";
//     constructor(){
//         console.log("Hello Developer");
//     }
//     welcome() {
//         return this.user ;
//         }
// }

// const app = new user;




// do not using a call a function in constructor
// -----------type-1---end------------------


// ---------------type--2----------------------
class user {
    user = "user 1";

    constructor(data){
        console.log(`Hello Developer ${data}`);
    }

    welcome(data) {
        return this.user+" " + data ;
        }
}

const app = new user("Ghaziabad");
console.log(app.welcome("Ashish"));




// ------------------type--2---end------------------------
