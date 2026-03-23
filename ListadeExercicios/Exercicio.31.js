function Negativos(...numeros) {
    let negativos = 0
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] < 0) {
            negativos++
        } 
    }
    return negativos > 0 ? `Quantidade de números negativos: ${negativos}` : 'Não tem números negativos.'
}

console.log(Negativos(2,3,4, -1, -3, -4))