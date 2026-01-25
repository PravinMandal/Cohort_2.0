let para = document.querySelector("p") 
const charac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

let isAnimating = false;

para.addEventListener("mouseenter", () => {
    if(isAnimating) return;
    isAnimating = true;

    let i = 0
    const ran = setInterval(() => {
        const str = text.split("").map((char, index) => {
            if(index < Math.floor(i)) {
                return char
            }
            return charac.split("")[Math.floor(Math.random() * 52)]
        }).join("")
        para.innerText = str 
        console.log(str);
        
        i += 0.25

        if( i > text.length) {
            clearInterval(ran);
            para.innerHTML = text;
            isAnimating = false;
        }
    }, 20)

})