
function ParImpar(...numeros) {
    let par = 0
    let impar = 0
    for(let n of numeros) {
        if(n % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    return `Existem ${par} números pares, e ${impar} números impares.`
}

console.log(ParImpar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15))