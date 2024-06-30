let openUl = document.querySelector(".header .container .links")

openUl.addEventListener("click", (e) => {
    e.stopPropagation();
    openUl.classList.toggle("open")
})

document.addEventListener("click", (e)=> {
    if (e.target !== openUl) {
        openUl.classList.toggle("open") 
    }
})