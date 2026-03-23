function ClassAluno(nota) {
    let notaUp = arredondar(nota)
    if(notaUp >= 40) {
        console.log(`Aprovado nota: ${notaUp}`)
    } else {
        console.log(`Reprovado nota: ${notaUp}`)
    }
}

function arredondar(nota) {
    if(nota % 5 > 2 && nota >= 38) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

ClassAluno(100)
ClassAluno(89)
ClassAluno(77)
ClassAluno(38)
ClassAluno(29)