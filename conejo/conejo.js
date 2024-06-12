let bandera = false;
let elementoSeleccionado = null;
let parar = false;
let elementosSeleccionados = [null];
let suma = 0;
let tiempo;
let tiempo_juego = {
    "minutos": 0,
    "segundos": 0
};
let bandera2 = false;

document.getElementById("acerca-de").addEventListener("click", ()=>{
	if (bandera2 == false) {
	document.getElementById("caja-acerca-de").innerHTML += `		
<h4 class="centrado" id="fuente">
República Bolivariana de Venezuela <br>
Ministerio del Poder Popular para la Educación<br>
E.B.N Padre Dehón<br>
Mariara, Edo. Carabobo<br>
Circuito #4 Diego Ibarra<br>
<br>
<span class="grande"></span>
<br>
Línea de acción: Matemática digital para la TIC'S <br>
<br>
<br>
		</h4>`
	bandera2 = true;} else {
		document.getElementById("caja-acerca-de").innerHTML = "";
        bandera2 = false;
	}
})

const temporizador = setInterval(()=>{
	tiempo = document.getElementById("tiempo");
	tiempo_juego["segundos"] += 1;
	if (tiempo_juego["segundos"] ==60){
		tiempo_juego["minutos"] +=1
		tiempo_juego["segundos"] = 0
	}
	tiempo.innerHTML = tiempo_juego["minutos"].toString() + ":" + tiempo_juego["segundos"].toString()
},1000);
function sumar(lista) {
	let sumaLista = 0;
	//console.log(lista)
	for (i of lista) { try{sumaLista += parseInt(i.innerHTML[4]);}catch{continue} }
	return sumaLista;
}

function inImprovisado(lista, objeto){
	for (i of lista) {
		if (i == objeto) return true;
	}

	return false
}

function cargar(nums){
	array = [];
	for (i of nums) array.push(document.getElementById(i.toString()));
	return array;
}

function cumpleCondicion(elemento, tabla, elementoAnterior=null) {
	if (elementoAnterior == null || elemento == null) return true;
	console.log("OK")

	let posicionA = [];
    let posicionB = [];
    let posicionesA = [];
    let posicionesB = [];
	//console.log(elemento);
	elementoAnterior = parseInt(elementoAnterior.innerHTML[4])
	//console.log(elementoAnterior);
	//console.log(tabla);
	forA:

    for (i in tabla) {
    	for (j in tabla[i]){/*
    		console.log(i, j)
    		console.log(typeof tabla[i][j])
    		console.log(typeof elemento)
    		console.log(tabla[i][j] == elemento)*/
    		if (tabla[i][j] == elemento){
    			posicionA.push(i);
    			posicionA.push(j);
    			// console.log(posicionA)
    			break forA;
    			//console.log("cumplished")
    		}
    	}
    }

    forB:
    for (i in tabla) {
    	for (j in tabla[i]){/*
    		console.log(i, j)
    		console.log(tabla[i][j])
    		console.log(elementoAnterior)
    		console.log(tabla[i][j] == elementoAnterior)*/
    		if (elementoAnterior == tabla[i][j]){
    			posicionB.push(i);
    			posicionB.push(j);
    			// console.log(posicionB);
    			break forB;
    		}
    	}
    }

    for (i of tabla[posicionA[0]]){
    	posicionesA.push(i)
    }
    for (i of tabla[posicionB[0]]){
    	posicionesB.push(i)
    }
    for (i in tabla) {
		for (j in tabla[i]){
			if (j == posicionA[1]){
				posicionesA.push(tabla[i][j]);
			}
		}
	}
	for (i in tabla) {
		for (j in tabla[i]){
			if (j == posicionB[1]){
				posicionesB.push(tabla[i][j]);
			}
		}
	}/*
	console.log(posicionesA);
	console.log(posicionB);
	console.log(posicionesA);
	console.log(posicionB);*/
	return inImprovisado(posicionesB, elemento)
}

function agregarEvento(elemento){
	elemento.addEventListener("click",()=>{	
		if (!bandera && 
			!(inImprovisado(elementosSeleccionados, elemento)) && 
			!parar &&
			cumpleCondicion(parseInt(elemento.innerHTML[4]), [[1,2,3], [4,5,6], [7,8,9]], elementosSeleccionados[elementosSeleccionados.length-1])
			){
			//console.log([elemento, elementosSeleccionados])
			//console.log(cumpleCondicion(elemento, [[1,2,3], [4,5,6], [7,8,9]], elementosSeleccionados[elementosSeleccionados.length]));
			//console.log(elementosSeleccionados[elementosSeleccionados.length-1]);

			bandera = true;
			elemento.classList.add("seleccionado");
			elementoSeleccionado = elemento;
			// console.log(elementosSeleccionados)
		}
	});
}

let variables = cargar([1,2,3,4,5,6,7,8,9]);
// console.log(variables);

for (i of variables) {
	agregarEvento(i)
}


boton.addEventListener("click", ()=>{
	if (elementoSeleccionado != null && !parar) {
		bandera = false;
		elementoSeleccionado.classList.remove("seleccionado");

		num = elementoSeleccionado.innerHTML[4]
		// elementoSeleccionado.removeEventListener("click", code);
		// console.log(num)
		// console.log(elementosSeleccionados)
		elementosSeleccionados.push(elementoSeleccionado);
		console.log(sumar(elementosSeleccionados))
		if (sumar(elementosSeleccionados) >= 25){
			botonReseteo = document.createElement("BUTTON");
			botonReseteo.addEventListener("click", ()=>location.reload(true))
			botonReseteo.id = "boton-reseteo";
			botonReseteo.innerHTML = "Volver a jugar"
			gif = document.getElementById('gifConejo')
			//document.getElementById("caja-boton").replaceChild(botonReseteo, gif)
			document.getElementById("caja-boton").appendChild(botonReseteo)
			document.getElementById("tiempo").style.backgroundImage = "none";
			parar = true;
			caja.innerHTML = "Game Over"
			clearInterval(temporizador)
		} else {
			let p = document.getElementById("p");
			p.innerHTML += "+" + parseInt(num)
			// console.log(elementosSeleccionados)
		}
		elementoSeleccionado.classList.add("usado")
		//elementoAnterior = elementoSeleccionado;
		elementoSeleccionado = null;
	}
})

boton2.addEventListener("click", ()=>{if (!parar){
	bandera = false;
	elementoSeleccionado.classList.remove("seleccionado");
	elementoSeleccionado = null
}});

// Punto de quiebre...

