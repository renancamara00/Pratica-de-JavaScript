function buscaPalavra(inicio, palavras) {
    const resultado = []
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].includes(inicio)) {
            resultado.push(palavras[i])
        }
    }
    return resultado
}

console.log(buscaPalavra("pro", ["programação", "mobile", "profissional"]))
console.log(buscaPalavra("java", ["javascript", "java", "c++"]))
console.log('------------------------------------------------------------------')

function buscador(inicio, palavra) {
    return palavra.filter(e => e.includes(inicio))
}

console.log(buscador("java", ["javascript", "java", "c++"]))
console.log(buscador("pro", ["programação", "mobile", "profissional"]))