function verificarNumero(num) {
    if (num % 3 == 0){
        return true
    } else {
        return false
    }
}

console.log(verificarNumero(6))
console.log(verificarNumero(150))
console.log(verificarNumero(90))
console.log(verificarNumero(89))
console.log(verificarNumero(4))