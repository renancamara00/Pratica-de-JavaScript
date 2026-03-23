function PorExtenso(num) {
    switch(num) {
        case 0:
            return 'Zero.'
        case 1:
            return 'Um.'
        case 2:
            return 'Dois.'
        case 3:
            return 'Três.'
        case 4:
            return 'Quatro.'
        case 5:
            return 'Cinco.'
        case 6:
            return 'Seis.'
        case 7:
            return 'Sete.'
        case 8:
            return 'Oito.'
        case 9:
            return 'Nove.'
        case 10:
            return 'Dez.'
        default:
            return 'Número fora do intervalo.'
    }
}

console.log(PorExtenso(0))
console.log(PorExtenso(1))
console.log(PorExtenso(2))
console.log(PorExtenso(3))
console.log(PorExtenso(4))
console.log(PorExtenso(5))
console.log(PorExtenso(6))
console.log(PorExtenso(7))
console.log(PorExtenso(8))
console.log(PorExtenso(9))
console.log(PorExtenso(10))
console.log(PorExtenso(11))
