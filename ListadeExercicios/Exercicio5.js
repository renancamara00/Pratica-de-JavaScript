function conversao(valorD) {
    valorR = `R$:${valorD.toFixed(2).toString().replace(".", ",")}`
    return valorR
}

console.log(conversao(0.22 + 0.2))