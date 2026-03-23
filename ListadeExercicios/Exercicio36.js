function primeira(vetorNum, inteiro){
    let novoVetor = []
    for(let i = 0; i < vetorNum.length; i++) {
        novoVetor.push(vetorNum[i] * inteiro)
    }
    return novoVetor 
}
function segundo(vetorNum, inteiro) {
    let novoVetor = []
    if(inteiro > 5) {
        for(let i of vetorNum) {
            novoVetor.push(i * inteiro)
        }
    }
    return novoVetor;
}
vetorNum = [2, 3, 4, 5]
console.log(primeira(vetorNum, 3))
console.log(segundo(vetorNum, 10))
