let btn = document.querySelector('button')
let main = document.querySelector('main')

let str = ["I'm the best", "this is the only life", "just do it already", "Enjoy the process", "It's Easy you know"]

btn.addEventListener('click', ()=> {
    let div = document.createElement('div')

    let p1 = Math.random()*100
    let p2 = Math.random()*100

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    let d = Math.random()*360

    div.style.height = '50px'
    div.style.width = '50px'
    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
    div.style.position = 'absolute'
    div.style.top = p1+'%'
    div.style.left = p2+'%'
    div.style.rotate = d+'deg'

    main.appendChild(div)
})

btn.addEventListener('click', function() {
    let h1 = document.createElement('h1')
    let a = Math.floor(Math.random()*str.length)
    let p1 = Math.random()*100
    let p2 = Math.random()*100
    let r = Math.random()*360
    let s = Math.random()*3
    h1.innerHTML = str[a]
    console.log(h1)
    h1.style.position = 'absolute'
    h1.style.color = 'white'
    h1.style.top = p1+'%'
    h1.style.left = p2+'%'
    h1.style.rotate = r+'deg'
    h1.style.scale = s
    main.appendChild(h1)
})