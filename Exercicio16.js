function CalculadoraBasica(num1, operador, num2) {
    resultado = 0
    switch (operador) {
        case '+':
            return (num1 + num2)
        case '-':
            return (num1 - num2)
        case '*':
            return (num1 * num2)
        case '/':
            return (num1 / num2)
        default:
            return 'Operador inválido.'
    }
}

console.log(CalculadoraBasica(100, '+', 20))
console.log(CalculadoraBasica(100, '-', 20))
console.log(CalculadoraBasica(100, '*', 20))
console.log(CalculadoraBasica(100, '/', 20))
console.log(CalculadoraBasica(100, 'a', 20))