function salarioMes(horasT, salarioH) {
    let salarioFinal = horasT * salarioH
    let impostos = 0.3
    salarioFinal = salarioFinal - (salarioFinal * impostos)
    return `Salario do mês R$: ${salarioFinal}`
}

console.log(salarioMes(150, 40.5))
console.log(salarioMes(180, 60))

