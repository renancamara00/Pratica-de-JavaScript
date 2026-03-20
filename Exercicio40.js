function Notas(vetorN) {
    let conceitos = []
    for (let i = 0; i < vetorN.length; i++) {
        if (vetorN[i] <= 4.9) {
            conceitos.push("D")
        } else if (vetorN[i] <= 6.9) {
            conceitos.push("C")
        } else if (vetorN[i] <= 8.9) {
            conceitos.push("B")
        } else if (vetorN[i] <= 10) {
            conceitos.push("A")
        } else {
            conceitos.push("Nota inválida.")
        }
    }
    return conceitos
}
    let vetorN = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]

    console.log(Notas(vetorN))