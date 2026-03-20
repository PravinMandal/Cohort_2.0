// Javascript Assignment

// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)


// let a = 10;
// let b = 3;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);


// let x = 5;
// x = x+3;
// console.log(x);
// x += 2;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);


// console.log( 5 == "5"); //true;
// console.log( 5 === "5"); //false;


// console.log(5&1); // 5 is odd
// console.log(5|1); // 101 | 001 -> 101 -> 5


//Hoisting
// console.log(a);
// var a = 10; // split ho jaata hai internally, var a; sabse upr cahle jaata hai, a = 10 yahi rehta hai
//isiliye undefined aata h kyuki declaration toh upr hi ho gya


// console.log(b);
// let b = 10;
// "let" use krte hai toh hoisting nhi hoti , temporal dead zone hota hai
//jis line mai declare kiye hai uske nhi hi use kr skte hai


// test();
// function test() {
//     console.log("Hello");
// }
//kaam kr rha h, "Hello" print ho rha h


// hello()
// var hello = function() {console.log("hi")};
//kyuki var hello toh upr declare ho gya hoisting ke wajah se but jab call kiya toh ye error aaya
//hello is not a function ye error aaya


// let age = prompt("Enter Your age");
// if(age >= 18) {
//     console.log(`${age} huh You're still kid bitch`);
// }


// let marks = 80;
// if(marks > 90) {
//     console.log("A grade"); 
// }
// else if(marks >= 75) {
//     console.log("B grade");
// }
// else if (marks >= 50) {
//     console.log("C grade");
// } else {
//     console.log("Fail");
// }


// let score = 40;
//  (score > 35) ? console.log("Pass") : console.log("Fail");

// let temp = 10;
// temp > 30 ? console.log("Hot") : console.log("Pleasant");


