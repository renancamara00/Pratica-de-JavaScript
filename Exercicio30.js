function MaiorMenor(...numeros) {
    let maior = numeros[0]
    let menor = numeros[0]
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] > maior) {
            maior = numeros[i]
        } 
        if(numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return [maior, menor]
}

console.log(MaiorMenor(10,2,3,6,9))


function MenorMaior(...numeros) {
    const Maior = Math.max(...numeros)
    const Menor = Math.min(...numeros)
    return [Maior, Menor]
}

console.log(MenorMaior(10,2,3,4,9,1))