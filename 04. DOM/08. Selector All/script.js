let elem = document.querySelectorAll(".elem");

elem.forEach(function(val) {
    let btn = val.childNodes[3];
    console.log(btn)
    btn.addEventListener('click', function() {
        if(btn.innerHTML == 'Add Friend') {
            btn.innerHTML = 'remove'
        }
        else {
            btn.innerHTML = 'Add Friend'
        }
    })
    
})