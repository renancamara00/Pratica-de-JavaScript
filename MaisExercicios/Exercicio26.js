function removerVogais(string) {
    let vogais = 'aeiouAeiou'
    let resultado = ''
    for(let i = 0; i < string.length; i++) {
        if(!vogais.includes(string[i])) {
            resultado += string[i]
        }
    }
    return resultado
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))

console.log('------------------------------')

function removerV(palavra) {
   return palavra.split('').filter(e => !'AEIOUaeiou'.includes(e)).join('')
}

console.log(removerV('Coder'))
console.log(removerV('Escola'))

console.log('----------------------------------')

function removerVogais2(frase) { 
const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"] 
vogais.forEach( vogal => frase = frase.replaceAll(vogal, '') ) 
return frase 
}

console.log(removerVogais2('osso'))

