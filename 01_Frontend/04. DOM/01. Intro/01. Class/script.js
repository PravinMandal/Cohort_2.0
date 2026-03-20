let h1 = document.querySelector('h1');
let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')

let a = 0;

inc.addEventListener('click', function() {
    a++;
    h1.innerHTML = a;
    h1.style.color = 'green'
})

dec.addEventListener('click', function() {
    a--;
    h1.innerHTML = a;
    h1.style.color = 'red';
})