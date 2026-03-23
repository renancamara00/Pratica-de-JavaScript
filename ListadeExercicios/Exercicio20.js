function Saque(ValorSaque) {
    let notas = [100, 50, 10, 5, 1]
    let resultado = ''

    for(let nota of notas) {
        let QuantidadeNotas = Math.floor(ValorSaque/nota)

        if(QuantidadeNotas > 0) {
            resultado += `${QuantidadeNotas} notas de R$:${nota}. `
        }
        ValorSaque %= nota
    }
    return resultado || 'Valor inválido.'
}

console.log(Saque(123))
