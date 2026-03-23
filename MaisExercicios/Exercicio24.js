function contarLetra(letra, string) {
    let contador = 0
    for(let i = 0; i < string.length; i++) {
        if(letra === string[i] ) {
            contador++
        }
    }
    return contador
}

console.log(contarLetra('e', 'A sorte favorece os audazes.'))
console.log(contarLetra('c', 'Conhece-te a ti mesmo'))

console.log('----------------------------------------')

function contarCaracter(l, s) {
    return [...s].filter(caracter => caracter === l).length
}

console.log(contarCaracter('a', 'A sorte favorece os audazes.'))
console.log(contarCaracter('m', 'Conhece-te a ti mesmo'))

console.log('----------------------------------------')
function contarletra2(letra, string) {
    return string.split(letra).length - 1
}

console.log(contarletra2('A', 'A sorte favorece os audazes.'))