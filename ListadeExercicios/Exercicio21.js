function PlanoSaude(idade) {
    resultado = 100
    if (idade < 10) {
        resultado += 80
    } else if (idade < 30) {
        resultado += 50
    } else if (idade < 60) {
        resultado += 95
    } else {
        resultado += 130
    }
    return resultado
}

console.log(PlanoSaude(8));
console.log(PlanoSaude(15));
console.log(PlanoSaude(35));
console.log(PlanoSaude(52));
console.log(PlanoSaude(80));