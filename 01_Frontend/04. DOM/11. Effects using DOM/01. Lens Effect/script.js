const body = document.body

body.addEventListener("mousemove", (e) => {
    
    body.style.setProperty("--x", e.clientX + "px")
    body.style.setProperty("--y", e.clientY + "px")
    
})