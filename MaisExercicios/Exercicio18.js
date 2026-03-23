function despesas(produtos) {
    return produtos.reduce((acc, num) => acc + num.preco, 0)
}

console.log(despesas([ 
{nome: "Jornal online", categoria: "Informação", preco: 89.99}, 
{nome: "Cinema", categoria: "Entretenimento", preco: 150} 
]))
console.log(despesas([ 
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99}, 
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90} 
]))


function despesa(produtos) {
    const precos = p => p.preco
    return produtos.map(precos).reduce((acc, atual) => acc + atual, 0)
}

console.log(despesa([ 
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99}, 
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90} 
]))