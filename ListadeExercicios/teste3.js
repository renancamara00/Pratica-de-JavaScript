let matriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function maiorNumero() {
    const maximo = Math.max(...matriz)
    const minimo = Math.min(...matriz)
    return {maximo, minimo}
}

console.table(maiorNumero())

// duas maneiras de fazer a mesmas coisa... o dei baixo sem função apenas com laço

let maior = matriz[0]
let menor = matriz[0]
for(i = 0; i < matriz.length; i++) {
    if (matriz[i] > maior) {
        maior = matriz[i]
    }

    if (matriz[i] < menor) {
        menor = matriz[i]
    }
}

console.log(maior)
console.log(menor)