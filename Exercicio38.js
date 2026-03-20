function Impares(inicio, fim) {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio]
    }
    let impares = []
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            impares.push(i)
        }
    }
    return impares
}

console.log(Impares(100, 0))
