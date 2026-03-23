function menorNumero(numeros) {
    let menor = numeros[0]
    for(let i = 0; i< numeros.length; i++) {
        if(numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return menor
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))

function menor(vetor) {
    return Math.min(...vetor)
}

console.log(menor([5, -15, 50, 3]))


function menorNumero2(numeros) { 
return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual) 
}

console.log(menorNumero2([10, 5, 35, 65]))
console.log(menorNumero2([5, -15, 50, 3]))
