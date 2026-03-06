function Bhaskara(ax2, bx, c) {
    delta = Math.pow(bx, 2) - (4 * ax2 * c)
    vetor = []
    if (delta < 0) {
        return "Delta é negativo."
    }
    const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    vetor.push(x1)
    vetor.push(x2)
    return vetor

}
console.log(Bhaskara(1, 3, 2))
console.log(Bhaskara(3, -5, 12))