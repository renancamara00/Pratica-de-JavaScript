function Modelo(carro) {
    carro = carro.toLowerCase()
    switch(carro) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que deseja comprar este modelo?'
        break
        default:
            return 'Não trabalhamos com esse tipo de automovel aqui.'
    }
}

console.log(Modelo('hatch'))
console.log(Modelo('sedan'))
console.log(Modelo('motocicleta'))
console.log(Modelo('caminhonete'))
console.log(Modelo('picape'))