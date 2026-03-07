
function Progrecao(pontosTostring) {
    const pontos = pontosTostring.split(",").map(Number)
    let recorde = 0
    let MaiorPontos = pontos[0]
    let MenorPontos = pontos[0]
    let JogoMenosP = 0
    for(let i = 1; i < pontos.length; i++){
        if(pontos[i] > MaiorPontos){
            MaiorPontos = pontos[i]
            recorde++
        }
        if(pontos[i] < MenorPontos) {
            MenorPontos =pontos[i]
            JogoMenosP = i + 1
        }
    }
    return [recorde,JogoMenosP ]
}

console.log(Progrecao("10, 2, 15, 20, 0, 30"))