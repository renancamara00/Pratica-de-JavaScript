function Cardapio(codigo, quantidade) {
    switch(codigo){
        case 100:
            return `${quantidade} Cachorro's Quente's, Total a pagar R$:${3.00 * quantidade}`
        case 200:
            return `${quantidade} Hamburguer's Simples, Total a pagar R$:${4.00 * quantidade}`
        case 300:
            return `${quantidade} Cheeseburguer's, Total a pagar R$:${5.50 * quantidade}`
        case 400:
            return `${quantidade} Bauru's, total a pagar R$:${7.50 * quantidade}`
        case 500:
            return `${quantidade} Refrigerante's, total a pagar R$:${3.50 * quantidade}`
        case 600:
            return `${quantidade} Suco's, total a pagar R$:${2.80 * quantidade}`
        default:
            return 'Produto não existente.'
    }
}

console.log(Cardapio(100, 4))
console.log(Cardapio(200, 4))
console.log(Cardapio(300, 4))
console.log(Cardapio(400, 4))
console.log(Cardapio(500, 4))
console.log(Cardapio(600, 4))