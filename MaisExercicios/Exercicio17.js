function somaArr(arr) {
    return arr.reduce((acc, atual) => acc + atual, 0)
}

console.log(somaArr([10,10,10]))
console.log(somaArr([100, 50, 20, 30]))



function somarNumeros(numeros) { 
let soma = 0 
numeros.forEach(numero => soma += numero) 
return soma 
}

console.log(somarNumeros([10,10,10]))
console.log(somarNumeros([15, 15, 15, 15]))