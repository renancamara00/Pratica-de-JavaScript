function sorteio(numero) {
    let aleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    if(numero == aleatorio) {
        return `Parabens! O número sorteado foi o ${aleatorio}`
    } else {
        return `Que pena! O número sorteado foi o ${aleatorio}`
    }
}

console.log(sorteio(10))
console.log(sorteio(9))
console.log(sorteio(8))
console.log(sorteio(7))
console.log(sorteio(6))
console.log(sorteio(5))
console.log(sorteio(4))
console.log(sorteio(3))
console.log(sorteio(2))
console.log(sorteio(1))