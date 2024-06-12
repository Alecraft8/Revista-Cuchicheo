

const belen = document.getElementById("belen");
const simbolos = document.getElementById("simbolos");
const mujer = document.getElementById("mujer");
const fisica = document.getElementById("fisica");
const poesia = document.getElementById("poesia");
const ramos = document.getElementById("ramos");

belen.addEventListener("click", ()=>{
    document.getElementById("imagen-belen").classList.remove("invisible");
    document.getElementById("imagen-simbolos").classList.add("invisible");
    document.getElementById("imagen-mujer").classList.add("invisible");
    document.getElementById("imagen-fisica").classList.add("invisible");
    document.getElementById("imagen-ramos").classList.add("invisible");
    document.getElementById("imagen-poesia").classList.add("invisible");
});

simbolos.addEventListener("click", ()=>{
    document.getElementById("imagen-belen").classList.add("invisible");
    document.getElementById("imagen-simbolos").classList.remove("invisible");
    document.getElementById("imagen-mujer").classList.add("invisible");
    document.getElementById("imagen-fisica").classList.add("invisible");
    document.getElementById("imagen-ramos").classList.add("invisible");
    document.getElementById("imagen-poesia").classList.add("invisible");
});

mujer.addEventListener("click", ()=>{
    document.getElementById("imagen-belen").classList.add("invisible");
    document.getElementById("imagen-simbolos").classList.add("invisible");
    document.getElementById("imagen-mujer").classList.remove("invisible");
    document.getElementById("imagen-fisica").classList.add("invisible");
    document.getElementById("imagen-ramos").classList.add("invisible");
    document.getElementById("imagen-poesia").classList.add("invisible");
});

fisica.addEventListener("click", ()=>{
    document.getElementById("imagen-belen").classList.add("invisible");
    document.getElementById("imagen-simbolos").classList.add("invisible");
    document.getElementById("imagen-mujer").classList.add("invisible");
    document.getElementById("imagen-fisica").classList.remove("invisible");
    document.getElementById("imagen-ramos").classList.add("invisible");
    document.getElementById("imagen-poesia").classList.add("invisible");
});

ramos.addEventListener("click", ()=>{
    document.getElementById("imagen-belen").classList.add("invisible");
    document.getElementById("imagen-simbolos").classList.add("invisible");
    document.getElementById("imagen-mujer").classList.add("invisible");
    document.getElementById("imagen-fisica").classList.add("invisible");
    document.getElementById("imagen-ramos").classList.remove("invisible");
    document.getElementById("imagen-poesia").classList.add("invisible");
});

poesia.addEventListener("click", ()=>{
    document.getElementById("imagen-belen").classList.add("invisible");
    document.getElementById("imagen-simbolos").classList.add("invisible");
    document.getElementById("imagen-mujer").classList.add("invisible");
    document.getElementById("imagen-fisica").classList.add("invisible");
    document.getElementById("imagen-ramos").classList.add("invisible");
    document.getElementById("imagen-poesia").classList.remove("invisible");
});