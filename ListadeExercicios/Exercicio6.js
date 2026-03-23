function jurosSimples(capitalInicial, taxaJ, tempoApli) {
    taxaJ = taxaJ/100
    Juros = capitalInicial * taxaJ * tempoApli
    montante = Juros + capitalInicial
    return montante
}

console.log(jurosSimples(1000, 5, 2))

function JurosComposto(capitalInicial, taxaJ, tempoApli) {
    taxaJ = taxaJ/100
    Montante = capitalInicial * Math.pow((1 + taxaJ), tempoApli)
    return Montante.toFixed(2)
}

console.log(JurosComposto(1000, 5, 2))