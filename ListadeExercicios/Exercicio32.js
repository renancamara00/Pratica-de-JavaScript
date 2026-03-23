function MediaAritmetica(numeros) {
    if(numeros.length === 0) return 0
    let soma = numeros.reduce((acc, num) => acc + num, 0)
    let media = soma / numeros.length
    return media.toFixed(2)
}

numeros = [1, 5, 4]
console.log(MediaAritmetica(numeros))