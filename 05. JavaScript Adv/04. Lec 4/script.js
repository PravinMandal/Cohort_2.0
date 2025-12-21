// function abcd(fn1) {
//     fn1(function(fn3){
//         fn3(function(fn5){
//             fn5();
//         });
//     });
// }

// abcd(function(fn2){
//     fn2(function(fn4){
//         fn4(function(){
//             console.log("huiiiii");
//         });
//     });
// })

function icecreamLao(address, fn) {
    //logic -> address par jao and icecream lelo
    //ab return krna hai
    //callback funtion mai pass krdo
    let icecream = "Cone Icecream";
    fn(icecream)
}

icecreamLao("pune", function(icecream){
    console.log(icecream);
});