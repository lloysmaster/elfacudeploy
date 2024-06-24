const nav = document.querySelector("#nav");
const abir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abir.addEventListener("click", () =>{
    nav.classList.add("visible")
})
cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible")
}) 