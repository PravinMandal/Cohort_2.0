class User {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.loggedIn = function() {
            console.log("Logged in");
        }
    }
}

let user1 = new User("Pravin", "pravin@gmail.com");
let user2 = new User("rushi", "rushi@gmail.com");
let user3 = new User("tanny", "tanny@gmail.com");


//create a user constructor function without class

function Users() {
    this.name = "Pravin";
    this.login = function() {
        console.log("LoggedIn");
    }
}
Users.prototype.loggedin = function() {
    console.log("loggedin")
}
let u1 = new Users();