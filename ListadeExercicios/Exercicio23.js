function MediaPonderada(codigoAluno, nota1, nota2, nota3) {
    mediaPon = 0
    if(nota1 >= nota2 && nota1 >= nota3 ) {
        mediaPon = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
    } else if(nota2 >= nota1 && nota2 >= nota3) {
        mediaPon = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10
    } else {
        mediaPon = ((nota3 * 4) + (nota1 * 3) + (nota2 * 3)) / 10
    }
    const status = mediaPon >= 5 ? 'Aprovado' : 'Reprovado'
    return `Código do aluno: ${codigoAluno} ${status} - notas: p1: ${nota1}, p2: ${nota2}, p3: ${nota3} - média final: ${mediaPon}`
   
}

console.log(MediaPonderada(23, 2.8, 6, 3.5))