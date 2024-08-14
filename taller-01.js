// PUNTO 1
function convertidorTemp(celsius) {
    let fahrenheit
    fahrenheit = celsius * 9 / 5 + 32
    return fahrenheit


}

celsius = 31
console.log(celsius + ' grados Celsius son ' + convertidorTemp(celsius) + ' grados Fahrenheit')


// PUNTO 2
function resolvedor(a, b, c, resultType) {
    let result
    if (resultType === 1) {
        result = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a
    } else {
        result = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a
    }

    return result

}

a = 1
b = 5
c = 4
resultType = 1
console.log('el resultado es ' + resolvedor(a, b, c, resultType))

//PUNTO 3
function mejorParidad(number) {
    if (number % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

number = 4
console.log('El numero dado es ' + mejorParidad(number))

//PUNTO 4
function peorParidad(number) {
    if (number === 0) {
        return 'par'
    } else if (number === 1) {
        return 'impar'
    } else if (number === 2) {
        return 'par'
    } else if (number === 3) {
        return 'impar'
    } else if (number === 4) {
        return 'par'
    } else if (number === 5) {
        return 'impar'
    } else if (number === 6) {
        return 'Par'
    } else if (number === 7) {
        return 'Impar'
    } else if (number === 8) {
        return 'par'
    } else if (number === 9) {
        return 'impar'
    } else if (number === 10) {
        return 'par'
    } else if (number === 11) {
        return 'impar'
    } else if (number === 12) {
        return 'par'
    } else if (number === 13) {
        return 'impar'
    } else if (number === 14) {
        return 'par'
    } else if (number === 15) {
        return 'impar'
    } else if (number === 16) {
        return 'par'
    } else if (number === 17) {
        return 'impar'
    } else if (number === 18) {
        return 'par'
    } else if (number === 19) {
        return 'impar'
    } else if (number === 20) {
        return 'par'
    } else {
        return peorParidad(number - 20)
    }
}

number = 2000
console.log('El numero dado es ' + peorParidad(number))