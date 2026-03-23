const obj = {a: 1, b: 2, c: 3}

function removerPropriedade(objeto, propriedade) {
    let copia = Object.assign({}, objeto) // = {...objeto}
    delete copia[propriedade]

    return copia
}
console.log(removerPropriedade(obj, 'c'))

console.log(Object.is(removerPropriedade(obj, 'a'), obj))