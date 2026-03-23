<<<<<<< HEAD
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
=======
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
>>>>>>> a67ae85d2fbad406a92638a7f8fce2c5381009f4
