function OperacoesMat(num1, num2) {
    let soma = num1 + num2
    let sub = num1 - num2
    let mult = num1 * num2
    let div = num1/num2
    return [`Soma dos valores: ${soma}, Subtração dos valores: ${sub}, Multiplicação dos valores: ${mult}, Divisão dos valores: ${div}`]
}

console.log(OperacoesMat(10, 20))