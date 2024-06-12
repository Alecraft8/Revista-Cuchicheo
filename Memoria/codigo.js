
// Funciones

obtenerNumeroConRango = (n1,n2)=>{
  let numeroInicial = Math.floor(Math.random()*n2);
  while (numeroInicial < n1) {
    numeroInicial = Math.floor(Math.random()*n2);
  }
  return numeroInicial;
}

crearIMG = (url,numero)=>{
  let imagen = document.createElement("IMG");
  imagen.src = url;
  imagen.classList.add("protoimagen");
  imagen.classList.add("invisible");
  imagen.setAttribute("id", `${numero}`);
  return imagen;
}

desordenar = ()=>{
    botonesIndice.sort(function(){return Math.random()-0.5});
    botonesNumero.sort(function(){return Math.random()-0.5});
}

// Variables

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12];
const juego = document.querySelector("#juego");
let tarjetas = juego.querySelectorAll(".tarjeta");
let tarjetasL = Array.apply(null, tarjetas);
tarjetas = juego.querySelectorAll(".tarjeta");
const botonAyuda = document.getElementById("instrucciones");
let mostrarAyuda = false;
const textoAyuda = document.getElementById("texto-ayuda");

let botonesIndice = [
  crearIMG("Imagenes/cristo.jpg", numeros[0]),
  crearIMG("Imagenes/ebn.jpg", numeros[1]),
  crearIMG("Imagenes/escuela_horizonte.jpg", numeros[2]),
  crearIMG("Imagenes/maria.jpg", numeros[3]),
  crearIMG("Imagenes/puerta.jpg", numeros[4]),
  crearIMG("Imagenes/sillas.jpg", numeros[5])
];

let botonesNumero = [
  crearIMG("Imagenes/cristo.jpg", numeros[6]),
  crearIMG("Imagenes/ebn.jpg", numeros[7]),
  crearIMG("Imagenes/escuela_horizonte.jpg", numeros[8]),
  crearIMG("Imagenes/maria.jpg", numeros[9]),
  crearIMG("Imagenes/puerta.jpg", numeros[10]),
  crearIMG("Imagenes/sillas.jpg", numeros[11])
];

desordenar();

// Pre-Main
// Inicializa las tarjetas

for (let a = 0; a < tarjetas.length/2; a++) {
    tarjetas[a].appendChild(botonesIndice[a]);
}

for (let i = 6; i < (tarjetasL.length/2)+6; i++) {
    tarjetas[i].appendChild( botonesNumero[i-tarjetasL.length/2]);
}

tarjetas = Array.apply(null, tarjetas);


// Escucha el evento click en las tarjetas
tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", () => {
    // Si la tarjeta no está volteada, la voltea
    imagen = tarjeta.getElementsByTagName("img");

    if (!tarjeta.classList.contains("volteada") && !tarjeta.classList.contains("pareja")) {
      tarjeta.classList.add("volteada");
      tarjeta.firstChild.classList.remove("invisible");
    }
 
      // Si ya se ha volteado una tarjeta, verifica si las dos tarjetas volteadas son iguales
      if (tarjetas.find((t) => t.classList.contains("volteada") && t !== tarjeta) !== undefined) {
          // Si son iguales, las deja volteadas
          if (tarjeta.firstChild.src === tarjetas.find((t) => t.classList.contains("volteada") && t !== tarjeta).firstChild.src) {
            tarjeta.classList.add("pareja");
            tarjetas.find((t) => t.classList.contains("volteada") && t !== tarjeta).classList.add("pareja");
            tarjetas.find((t) => t.classList.contains("volteada") && t !== tarjeta).classList.remove("volteada");
            tarjeta.classList.remove("volteada")

          // Si ya se han encontrado todas las parejas, termina el juego
          if (tarjetas.filter((t) => !t.classList.contains("pareja")).length === 0) {
            alert("¡Has ganado!");
            tarjetas.forEach((tarjeta) => {
                juego.removeChild(tarjeta)});
            const botonReinicio = document.createElement("BUTTON");
            botonReinicio.classList.add("boton-reinicio");
            botonReinicio.addEventListener("click", ()=>{
                location.reload();
            });
            botonReinicio.innerHTML = "Reiniciar Juego";
            juego.appendChild(botonReinicio);
          }
          } else {
            // Si no son iguales, las voltea de nuevo
  
            let tiempoEspera = setTimeout(()=>{
              tarjetas.find((t) => t.classList.contains("volteada") && t !== tarjeta).classList.remove("volteada");
              tarjetas.find((t) => !(t.firstChild.classList.contains("invisible")) && t.firstChild !== tarjeta.firstChild).firstChild.classList.add("invisible")
              tarjeta.classList.remove("volteada");
              tarjeta.firstChild.classList.add("invisible");
              tarjetas.find((t) => t.classList.contains("volteada")).classList.remove("volteada");
              tarjetas.find((t) => !(t.firstChild.classList.contains("invisible"))).firstChild.classList.add("invisible")

            }, 500);
      }
    }
  });
});

botonAyuda.addEventListener("click", ()=>{
  if (!mostrarAyuda){ textoAyuda.classList.remove("invisible"); mostrarAyuda = True;}
  else if (mostrarAyuda) { textoAyuda.classList.add("invisible"); mostrarAyuda = False;}
});
