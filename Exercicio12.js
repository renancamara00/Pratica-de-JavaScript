function fatorial(n) {
    let resultado  = 1
    if(n === 1 || n === 0) return 1;
    for(let i = 2; i <= n; i++){
        resultado *= i
    }
    return resultado
}

console.log(fatorial(10))