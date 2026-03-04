function TrianguloTipo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return "É um triangulo Equilátero"
    } else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'É um triangulo Isosceles'
    } else {
        return 'É um triangulo Escaleno'
    }
}

console.log(TrianguloTipo(1, 1, 1))
console.log(TrianguloTipo(1,3,1))
console.log(TrianguloTipo(1, 2, 3))