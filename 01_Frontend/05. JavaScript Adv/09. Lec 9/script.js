// //debouncing
////search mai use hota hai - recommendation jab milta hai google mai, ekdum fatak se nhi milta
////agar har ms mai check krte toh server load badh jaata isiliye thoda delay deke krte hai
////kuch second baad recommended searches aate hai
// function debounce(fn, delay) {
//     let timer;
//     return function() {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn();
//         }, delay)
//     };
// }

// document.querySelector('#search').addEventListener("input", debounce(function(){
//     console.log("Chala");
// }, 500) 
// )


//throttling
//kuch krte rhenge toh ek delay ki interval mai baar baar hum log krwa skte hai
//animation mai kaam aata hai 
function throttle(fn, delay) {
    let last = 0;
    return function() {
        let now = Date.now();
        if(now - last >= delay) {
            last = now;
            fn();
        }
    }
}

window.addEventListener("mousemove", throttle(function(){
    console.log("Pravin");
}, 2000)
)