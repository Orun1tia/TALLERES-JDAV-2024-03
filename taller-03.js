// PUNTO 1

function desglosarString(palabra, tipo) {
    vocales = 'AEIOUaeiou'

    if (tipo === 'vocales') {
        return palabra.split('').filter(letra => vocales.includes(letra)).length
    } else if (tipo === 'consonantes') {
        return palabra.split('').filter(letra => !vocales.includes(letra)).length
    }

}

palabra = 'murcielagos'
tipo = 'consonante'

console.log(desglosarString(palabra, tipo))

// PUNTO 2

function twoSum(array, buscado) {
    return array.map((num, i) => {
        necesario = buscado - num
        const j = array.findIndex((n, idx) => n === necesario && idx !== i && i < idx)

        if (j !== -1) {
            return [i, j]
        }
    }

    ).filter(pair => pair !== undefined);
}

array = [1, 2, 7, 11, 15, 4, 6, 5, 8]
buscado = 8
console.log(twoSum(array, buscado))

// PUNTO 3

function conversionRomana(romano) {
    array = [
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]
    romano = romano.split('').map(i => {

        idx = array.findIndex((j) => i === j[0])
        return array[idx][1]

    })

    return romano.reduce((cont, n, i) => {

        if (n < romano[i + 1]) {
            return cont - n
        } else {
            return cont + n
        }

    }, 0)
}

romano = 'XIX'
console.log(conversionRomana(romano))
