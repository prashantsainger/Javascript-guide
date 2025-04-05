// class Ducat {
//     email = "abc@gmail.com";
//     #password = "12345";

//     student() {
//         return  `welcome to Ducat India  ${this.email}`;
//     }
// }
// const app = new Ducat;

// console.log(app.email);
// // console.log(app.#password);
// console.log(app.student());

// Do not access from outside in private value

// --------------type-1--end---------------

// ----------------type-2-------------------------

class Ducat {
    email = "abc@gmail.com";
    #password = "12345";

    student() {
        return `Welcome to Ducat ${this.email}`;
    }
   getAccount(){
        return this.#password;
    }

   
}
const app = new Ducat;
console.log(app.getAccount());


// Do visual outside access from  inside in private value by using a method ex. getAccount 
