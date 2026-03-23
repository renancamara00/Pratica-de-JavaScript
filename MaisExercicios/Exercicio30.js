function melhorMedia(estudantes) {
    let melhorEstudante = { nome: "", media: 0 }
    const entradas = Object.entries(estudantes)

    for (let i = 0; i < entradas.length; i++) {
        const [nome, notas] = entradas[i]
        const soma = notas.reduce((acc, num) => acc + num, 0)
        const mediaA = soma / notas.length

        if (mediaA > melhorEstudante.media) {
            melhorEstudante = { nome: nome, media: mediaA }
        }
    }
    return melhorEstudante
}


console.log(melhorMedia({
    Joao: [8, 7.6, 8.9, 6], // média 7.625 
    Mariana: [9, 6.6, 7.9, 8], // média 7.875 
    Carla: [7, 7, 8, 9] // média 7.75 
}))


const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function receberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0, valor = 1

        return { nome: estudante[chave], media: media(estudante[valor]) }
    })

    // Ordena do maior para o menor
    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) =>
        estudanteB.media - estudanteA.media
    )

    return estudantesOrdenados[0]
}


console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625 
    Mariana: [9, 6.6, 7.9, 8], // média 7.875 
    Carla: [7, 7, 8, 9] // média 7.75 
}))