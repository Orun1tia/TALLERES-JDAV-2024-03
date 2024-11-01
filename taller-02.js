// ====== PUNTO 1 ======
function findMax(lista) {
    max = 0

    for (numero in lista) {
        if (lista[numero] > max) {
            max = lista[numero]
        }
    }
    return max
}


// ====== PUNTO 2 ======
function includes(lista, buscado) {

    for (numero in lista) {
        if (lista[numero] === buscado) {
            return true
        }
    }
    return false
}


// ====== PUNTO 3 ======
function sum(lista) {
    let suma = 0
for (numero in lista) {
    suma += lista[numero]
}
return suma
}


// ====== PUNTO 4 ======
function  missingNumbers(lista){
	let missing = []
  	lista.sort((a, b) => a - b)
  	for(let i = lista[0]; i < lista[lista.length-1];i++){
  		if(!lista.includes(i)){
    			missing.push(i)
    		}
  	}
 	return missing
}
