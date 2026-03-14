vetorPilha = [1,2,3,4,5]
vetorAdiciona = [6,7,8,9,10]
function Fusao(vetorPilha, vetorAdiciona) {
    vetorFinal = vetorPilha.concat(vetorAdiciona)
    console.log(`Vetor Adicionado: ${vetorAdiciona}, Vetor final: ${vetorFinal}`)
}


Fusao(vetorPilha, vetorAdiciona)