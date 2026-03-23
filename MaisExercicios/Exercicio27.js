function inverter(objeto) {
    return Object.fromEntries(
        Object.entries(objeto).map(([chave, valor]) => [valor, chave])
    )
}

console.log(inverter({ a: 1, b: 2, c: 3 }))

console.log('--------------------------------------')


function inverter2(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
        .map(parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverter2({ a: 1, b: 2, c: 3 }))