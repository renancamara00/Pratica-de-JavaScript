function simbolo(numero) {
    let mais = ''
    let countar = 0
    for(let i = 0; i < numero; i++) {
        mais += '+'
        countar++
    }
    return [mais, countar]
}

console.log(simbolo(20))


function Simbol(quantidade) {
    return '+'.repeat(quantidade)
}

console.log(Simbol(3))