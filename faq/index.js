document.querySelectorAll(".titulo").forEach((titulo) => titulo.addEventListener("click",() =>{

if(titulo.parentNode.classList.contains("active")){

    titulo.parentNode.classList.toggle("active")
}
else{
    document.querySelectorAll(".titulo").forEach(titulo => titulo.parentNode.classList.remove("active"))

    titulo.parentNode.classList.add("active")

}

}))