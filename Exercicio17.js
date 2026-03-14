function PlanoTrabalho(plano, salario) {
    plano = plano.toUpperCase()
    switch(plano){
        case 'A':
            return `Novo salario: ${salario + (salario * 0.10)}`
        case 'B':
            return `Novo salario: ${salario + (salario * 0.15)}`
        case 'C':
            return `Novo salario: ${salario + (salario * 0.20)}`
        default:
            return 'Plano inválido.'
    }
}

console.log(PlanoTrabalho('a', 1000))
console.log(PlanoTrabalho('b', 1000))
console.log(PlanoTrabalho('c', 1000))
console.log(PlanoTrabalho('d', 1000))
