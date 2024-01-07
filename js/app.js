let navbar = document.getElementById("navbar")

window.addEventListener('scroll', () => {
    if (window.scrollY > 100){
        navbar.classList.add("navbar-ani")
    } else {
        navbar.classList.toggle("navbar-ani")
    }
})


