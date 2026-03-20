//destructuring

var arr = [1,2,3,4,5,6];
var arr2 = arr; //aise copy krenge toh pass by reference hota hai and agar arr2 mai change krenge toh arr mai bhi hoga

// toh spread operator use kr skte hai
arr2 = [...arr]; //ye aachese copy hota hai, by reference nhi hota, fresh copy banta hai

//one more thing
var [a,b,c,...d] = arr; // a->1, b->2, c->3, d ek array rhega baaki elements ka



//destructuring for objects
var obj = {
    name : 'pravin',
    age : 21,
    city : 'pune',
    country : 'india'
}

var obj2 = obj;
obj2.city = 'mumbai'

console.log(obj); //isme bhi city change ho gya hoga

// i don't want this, mujhe aachese copy krna hai, by reference nhi

var obj3 = {...obj};
//ab obj3 mai kuch bhi change kru obj mai nhi hoga

var{name, age, ...other} = obj; //aise bhi nikal skte hai, but name and age hai tbhi daalenge warna undefined aayega

console.log(other);

