function diaUtil(dia) {
    switch(dia){
        case 1:
            console.log('Domingo - Fim de semana')
        break
        case 2:
            console.log('Segunda-Feira - Dia Util')
        break
        case 3:
            console.log('Terça-Feira - Dia Util')
        break
        case 4:
            console.log('Quarta-Feira - Dia Util')
        break
        case 5:
            console.log('Quinta-Feira - Dia Util')
        break
        case 6:
            console.log('Sexta-Feira - Dia Util')
        break
        case 7:
            console.log('Sabado - Fim de Semana')
        break
        default:
            console.log('Dia inválido.')
    }
}

diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)
diaUtil(10)