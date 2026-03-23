function retornarArray(objeto) {
    let resultado = []
    for (let chave in objeto) {
        resultado.push([chave, objeto[chave]])
    }
    return resultado
}

console.log(retornarArray({ nome: "Maria", profissao: "Desenvolvedora de software" }))

function retornarArray2(objeto) {
    return Object.entries(objeto)
}

console.log(retornarArray2({ codigo: 11111, preco: 12000 }))