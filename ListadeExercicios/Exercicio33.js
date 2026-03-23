const  vetorInt = [1, 2, 3, 4]
const vetorString = ['a', 'b', 'c', 'd']
const vetorDouble = [0.1, 0.2, 0.3, 0.4]

function Concatenar(...vetores) {
    saida = []
    for(let i = 0; i < vetores.length; i++){
        saida = saida.concat(vetores[i])
    }
    return saida
}

console.log(Concatenar(vetorDouble, vetorInt))
console.log(Concatenar(vetorInt, vetorString))