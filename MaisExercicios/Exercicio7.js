function entreNumeros(minimo, maximo, numero, incluso = false) {
    if(incluso) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}

console.log(entreNumeros(10, 100, 15))
console.log(entreNumeros(16, 100, 100))
console.log(entreNumeros(3, 150, 3))
console.log(entreNumeros(3, 150, 3, true))