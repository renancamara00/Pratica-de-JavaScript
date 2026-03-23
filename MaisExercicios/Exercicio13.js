function filtrar(arr) {
    let resultado = arr.filter(e => typeof e === 'number')
    return resultado
}

console.log(filtrar(["Javascript", 1, "3", "Web", 20]))
console.log(filtrar(['a', 'b']))
