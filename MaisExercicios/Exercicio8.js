function multiplicar(num1, num2) {
    let resultado = 0
    for(let i = 0; i < num2; i++) {
        resultado += num1
    }
    return resultado
}

console.log(multiplicar(5, 5))


function multiplicacao(numero, multiplicador) {
    if(numero === 0 || multiplicador === 0) return 0

    return multiplicador === 1 ? numero : numero + multiplicacao(numero, multiplicador - 1)
}

console.log(multiplicacao(20, 10))