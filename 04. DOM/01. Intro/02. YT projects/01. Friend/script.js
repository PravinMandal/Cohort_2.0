let friend = document.querySelector('#friend')
let btn = document.querySelector('#btn')
let flag = 0;

btn.addEventListener("click", function() {
    if(flag === 0) {
        friend.innerHTML = "Friends"
        friend.style.color = "green"
        btn.innerHTML = "Remove"
        flag = 1
    } else {
        friend.innerHTML = "Strangers"
        friend.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }
})