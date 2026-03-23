function numeroIndicePar(arr) {
    let resultado = []
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 0 && arr[i] % 2 === 0){
            resultado.push(arr[i])
        }
    }
    return resultado
}

console.log(numeroIndicePar([1, 2, 3, 4]))
console.log(numeroIndicePar([10, 70, 22, 43, 50]))

function numIndicePares(arr) {
    let numerosPares = (e, indice) => (e % 2 === 0) && (indice % 2 === 0)
    let resultado = arr.filter(numerosPares)
    return resultado
}

console.log(numIndicePares([1,2,3,4]))
console.log(numIndicePares([10,70, 22, 43, 50]))

