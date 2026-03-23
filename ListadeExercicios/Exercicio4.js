function DividendoDivisor(dv, ds) {
    let resultado = dv / ds
    let resto = dv % ds
    return `Resultado dessa divisão: ${Math.floor(resultado)}, e o resto: ${resto}`
}

console.log(DividendoDivisor(11,4))