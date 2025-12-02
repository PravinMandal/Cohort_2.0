let btn = document.querySelector('button')
let bar = document.querySelector('#completion')
let h2 = document.querySelector('h2')
let count = 0

btn.addEventListener('click', function() {
    btn.style.pointerEvents = 'none'
    let r1 = 10 + Math.floor(Math.random()*50)

    console.log('Your file will be downloaded in', r1/10, 'sec')
    let inter = setInterval(() => {
        count++
        h2.innerHTML = count+'%'
        bar.style.width = count+'%'
    }, r1);

    setTimeout(() => {
        clearInterval(inter)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
    }, r1*100);

})