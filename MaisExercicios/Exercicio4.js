function mesDoano(mes) {
    switch(mes) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
    }
} 
console.log(mesDoano(1))
console.log(mesDoano(2))
console.log(mesDoano(3))
console.log(mesDoano(4))
console.log(mesDoano(5))
console.log(mesDoano(6))
console.log(mesDoano(7))
console.log(mesDoano(8))
console.log(mesDoano(9))
console.log(mesDoano(10))
console.log(mesDoano(11))
console.log(mesDoano(12))

console.log('------------------------------------------------------------------------------')

function mapaMes(m) {
    const meses = ['Janeiro', 'Feveirero', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[--m]
}

console.log(mapaMes(12))

