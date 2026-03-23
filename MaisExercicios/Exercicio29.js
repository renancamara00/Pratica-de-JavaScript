function segundoMaior(numeros) {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)

    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))

function maiorSegundo(numeros) {
    const numerosOrdem = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdem[1]

    return segundoMaior
}

console.log(maiorSegundo([12, 16, 1, 5]))
console.log(maiorSegundo([8, 4, 5, 6]))

console.log('----------------------------------------')

function segundoMaior2(numeros) {
    let indiceDoMaior = 0
    let segundoMaior2
    numeros.forEach((numero, indice) => {
        if (numero > numeros[indiceDoMaior])
            indiceDoMaior = indice
    })
    numeros.splice(indiceDoMaior, 1)
    segundoMaior2 = numeros[0]
    numeros.forEach(numero => {
        if (numero > segundoMaior2)
            segundoMaior2 = numero
    })
    return segundoMaior2
}

console.log(segundoMaior2([12, 16, 1, 5]))