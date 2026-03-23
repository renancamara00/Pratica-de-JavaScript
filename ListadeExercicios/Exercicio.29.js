function Intervalo(...numeros) {
    let numDentro = 0
    let numFora = 0
    for(let n of numeros) {
        if(n >= 10 && n <= 20) {
            numDentro++
        } else {
            numFora++
        }
    }
    return `${numDentro} números dentro do intervalo [10, 20], e ${numFora} números fora do intervalo.`
}


console.log(Intervalo(9, 10, 11, 12, 13, 15, 17, 19, 21, 29))