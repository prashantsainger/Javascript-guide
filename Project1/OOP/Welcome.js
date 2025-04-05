// --------------------type-1-----------------------
// class Welcome {
//     // data member
//     // let data="hello" not permission let

//     data = "Ducat India";

//     // console.log("Hello in Class Methos")
//     //  methods
//     hello(data) {
//         return (`Hello in Class Methos ${this.data} ${data}`)
//     }
//     user() {
//         return (`Hello user method ${this.data}`)
//     }
// }
// //  object
// const app = new Welcome;
// console.log(app.data);
// console.log(app.hello("Punit"));
// console.log(app.user());



// -----------------type-1-end---------------------

// -----------------type-2---------------------


class Welcome {

    data = "hello guys";

    hello(data) {
        return (`Hello Class Attend In ${data} ${this.data}`)
    }
    user(data) {
        return (`Hello Class Attend In  ${this.data} ${data}`)
    }
}


const a = new Welcome;
console.log(a)
console.log(a.data)
console.log(a.hello("Somesh"))
console.log(a.user("Ayush"))



