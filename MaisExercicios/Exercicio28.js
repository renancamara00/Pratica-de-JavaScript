function filtrarDigitos(numeros, quantidade) {
    let resultado = []
    for(let i = 0; i < numeros.length; i++) {
        let numero = numeros[i]
        if(String(numero).length === quantidade) {
            resultado.push(numero)
        }
    }
    return resultado
}

console.log(filtrarDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarDigitos([5, 9, 1, 125, 11], 1))


function filtrarporDigito(numeros, quantidade) {
    return numeros.filter(numero => String(numero).length === quantidade)
}

console.log(filtrarporDigito([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarporDigito([5, 9, 1, 125, 11], 1))