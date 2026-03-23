function contpalavas(palavra) {
    let resultado = 0
    let palavraArr = []
    palavraArr = palavra.split(/\s+/g)
    palavraArr.forEach((letra, indice) => {
        resultado = indice + 1 
    });
    return resultado
}

console.log(contpalavas('Ola tudo bem'))


function contarPalavras(palavra) {
    let palavraArr = palavra.trim().split(/\s+/g)
    let resultado = palavraArr.length
    return resultado
}

console.log(contarPalavras('Olá, bom dia, amanhã não terá aula'))