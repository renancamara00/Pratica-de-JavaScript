function Frutas(frut) {
    frut = frut.toLowerCase()
    switch(frut){
        case 'maça':
            console.log('Não vendemos essa fruta aqui.')
        break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.')
        break
        case 'melancia':
            console.log('Aqui está são R$:3,00 o kilo.')
        break
        default:
            console.log('Erro!')
    }   
}

Frutas('MELANCIA')
Frutas('KIWI')
Frutas('Maça')
Frutas('Melao')