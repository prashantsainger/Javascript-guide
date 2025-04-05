class Collage {
        data = "test";
        constructor() {
                console.log("Demo1");
        }
        welcome(){
                return "Hello Student";
        }
}

class school extends Collage {
        data = "Student";
        constructor() {
                // super();
                console.log("Demo2");
                super();
        }       
        hello() {
                return "Hello School Student";
        }
}

const app = new school;
console.log(app);
console.log(app.welcome());
console.log(app.hello());

// do work using a merge both parent and child between using a extends word