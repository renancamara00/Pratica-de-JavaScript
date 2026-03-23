function booleanoNumerico(valor) {
    if(typeof valor !== 'number' &&  typeof valor !== 'boolean') {
        return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
    return typeof valor === 'boolean' ? !valor : -valor
}

console.log(booleanoNumerico(10))
console.log(booleanoNumerico(-10))
console.log(booleanoNumerico(true))
console.log(booleanoNumerico(false))
console.log(booleanoNumerico('Teste'))