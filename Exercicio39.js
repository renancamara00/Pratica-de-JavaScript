let vetor1 = [1, 2, 3]
let vetor2 = [3, 2, 1]

function Troca(vetor1, vetor2) {
    if (vetor1.length === vetor2.length) {
        for (let i = 0; i < vetor1.length; i++) {
            [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]]
        }
    } else {
        return console.log("Vetores de tamanhos diferentes.")
    }
    console.log("Vetor 1: " + vetor1) 
    console.log("Vetor 2: " + vetor2)
}

Troca(vetor1, vetor2)

