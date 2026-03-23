function Crescimento(crianca1, taxa1, crianca2, taxa2) {
    if(crianca1 == crianca2){
        if(taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa2 > taxa1) {
            return 'A Criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'As duas crianças tem altura e taxa de crescimento iguais.'
        }
    } else {
        if(crianca1 > crianca2){
            if(taxa1 >= taxa2) {
                return 'A criança menor não vai ultrapassar a maior.'
            } else {
                return `A criança menor vai ultrapassar a maior em ${calculoTempo(crianca2, taxa2, crianca1, taxa1)} anos`
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não vai ultrapassar a maior.'
            } else {
                return `A criança menor vai ultrapassar a maior em ${calculoTempo(crianca1, taxa1, crianca2, taxa2)} anos`
            }
        }
    }
}

function calculoTempo(criancaMenor, taxaMenor, criancaMaior, taxaMaior) {
    let quantosAnos = 0
    while(criancaMenor < criancaMaior) {
        criancaMenor += taxaMenor
        criancaMaior += taxaMaior
        quantosAnos++
    }
    return quantosAnos
}

console.log(Crescimento(150, 2, 130, 4))