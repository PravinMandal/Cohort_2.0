class Bottle {
    constructor() {
        this.color = "blue";
        this.material = "Plastic";
        this.price = 100;
        this.somefunc = function() {};
    }

    //prototype: shared memory mai rehta hai
    drink() {}
    fill() {}
}

let bottle1 = new Bottle();


//value of 'this' keyword :
//global -> Window
//function -> Window
//es5 function inside object -> object
//es6 function inside object -> Window
//es5 function inside es5 function inside object -> Window
//es6 function inside es5 funtion inside object -> object


//call apply bind
//ek function mai this ki value window hoti hai, agar aap chahte ho ki wo value window na ho
//par koi aur object ho tab aap use kr skte ho call apply bind ka

let obj = {
    name : "pravin"
}
function abcd(a, b, c) {
    console.log(this, a, b, c);
}

abcd.call(obj, 1, 2, 3); // wo value pass kro jo aap "this" mai dikhana chahte ho, this ki value set krta hai
abcd.apply(obj, [1, 2 ,3]); //same as call bs this ki value ke baad jo arguments hai usse array mai dedo

let newfnc = abcd.bind(obj, 1, 2, 3); //same as call, bss ek new func return krta hai jisse baad mai call krke run kr skte hai
newfnc();
