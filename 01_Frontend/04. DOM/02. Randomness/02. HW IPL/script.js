
let teams = [
    {
        team : 'CSK',
        primary : 'yellow',
        secondary : 'blue',
        trophies : 0,
        captain : 'Dhoni'
    },
    {
        team : 'MI',
        primary : 'blue',
        secondary : 'gold',
        trophies : 0,
        captain : 'Rohit Sharma'
    },
    {
        team : 'KKR',
        primary : 'purple',
        secondary : 'gold',
        trophies : 0,
        captain : 'Gautam Gambhir'
    },
    {
        team : 'SRH',
        primary : 'orange',
        secondary : 'black',
        trophies : 0,
        captain : 'David Warner'
    },
    {
        team : 'PBKS',
        primary : 'crimson',
        secondary : 'black',
        trophies : 0,
        captain : 'Yuvraj singh'
    },
    {
        team : 'GT',
        primary : 'royalblue',
        secondary : 'aqua',
        trophies : 0,
        captain : 'Hardik Pandya'
    },
    {
        team : 'RCB',
        primary : 'red',
        secondary : 'black',
        trophies : 0,
        captain : 'Virat Kohli'
    },
]


let box = document.querySelector('#box');
let btn = document.querySelector('button')
let main = document.querySelector('main')


btn.addEventListener('click', function() {
    let winner = teams[Math.floor(Math.random()*teams.length)]
    
    box.innerHTML = ""
    main.style.backgroundColor = winner.primary
    box.style.backgroundColor = winner.secondary
    btn.style.backgroundColor = winner.secondary

    winner.trophies++;
    for(let key in winner) {
        box.innerHTML += `<h2>${key} : ${winner[key]}</h2>`
    }
})