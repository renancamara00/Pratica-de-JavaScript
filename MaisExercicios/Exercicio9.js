function repeticao(parametro, repeticao) {
    let arr = []
    for(let i = 0; i < repeticao; i++) {
        arr.push(parametro)
    }
    return arr
}
console.log(repeticao('Código', 2))
console.log(repeticao(7, 3))


function repetir(item, repetir) {
    return Array(repetir).fill(item)
}

console.log(repetir(10, 3))