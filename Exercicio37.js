function progressaoArit(n, a1, razao) {
    let an = [a1]
    for(let i = 0; i < n - 1; i++){
        an.push(an[i] + razao)
    }
    let soma = an.reduce((acc, num) => acc + num, 0 )
    return `an : ${an} e a soma: ${soma}`
}

function progessaoGeom(n, a1, razao) {
    let an = [a1] 
    for(let i = 0; i < n - 1; i++) {
        an.push(an[i] * razao)
    }
    let soma = an.reduce((acc, num) => acc + num, 0)
    return `an : ${an} e a soma ${soma}` 
}

console.log(progressaoArit(10, 10, 15))
console.log(progessaoGeom(10, 5, 3))

// an = a1 + ((n - 1) * razao)
// soma = ((a1 + an) * n) / 2