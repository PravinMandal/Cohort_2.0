const mousefollower = document.querySelector(".mouse-follower")

let x = 0;
let y = 0;

addEventListener("mousemove", (e)=> {
    const {clientX, clientY} = e
    x = clientX;
    y = clientY;
})

function far() {
    
    //transform, translate is more efficient then (absolute -> top, left (isme poora website re-render hota hai))
    // transform mai bs wo element re-render hota hai isliye zyada fast hota hai 
    mousefollower.style.transform = `translate(${x}px, ${y}px)`
    requestAnimationFrame(far) // jitna fps browser allow krega utne baar ye refresh hoga, mtlb aur smooth animation milega
}

far();