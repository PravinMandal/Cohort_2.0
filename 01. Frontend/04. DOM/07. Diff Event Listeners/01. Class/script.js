let body = document.querySelector('body')
let cursor = document.querySelector('#cursor')

body.addEventListener('mousemove', function(dets) {
    console.log(dets);
    
    cursor.style.left = dets.x + 'px'
    cursor.style.top = dets.y + 'px'
})