// calculo da média usando função 

function calculo(...numeros) {
    if (numeros.length === 0) return 0
    let media = numeros.reduce((acc, num) => acc + num, 0)
    return media / numeros.length
}

console.log(calculo())
console.log(calculo(4, 6))
console.log(calculo(10, 20, 30, 40))
console.log(calculo(5, 10, 15, 20, 30))
