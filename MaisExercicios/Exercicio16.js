function anoBissexto(ano) {
    return (ano % 400 == 0) || (ano % 100 != 0 && ano % 4 == 0)
}

console.log(anoBissexto(2014))