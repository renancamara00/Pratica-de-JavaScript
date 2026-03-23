function PrimeiroEUltimo(arr) {
    const primeiro = arr.shift()
    const segundo = arr.pop() 
    
    return [primeiro, segundo]
}

console.log(PrimeiroEUltimo([4,3,4,10,5]))