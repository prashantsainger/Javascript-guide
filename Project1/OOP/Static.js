class Ducat {
   static data = "user";
    constructor() {
        console.log("You are Tracked");
    }
   static hello() {
        return "Hello user";
    }
}

// --------------direct using a constructor-------------------

// const app = new Ducat();  
// ---------------------------------------/

console.log(Ducat.data);

console.log(Ducat.hello());



// do not need to make a object and direct using a static method 
// but before use a written static also ex console.log(class.data or method);
// do no make a Object{line no 10} in static method and direct use to call static method