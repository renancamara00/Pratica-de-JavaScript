function media(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
    return soma / arr.length
}

console.log(media([0, 10]))
console.log(media([1, 2, 3, 4, 5]))

console.log('-----------------------------------------------------')

function m(...media) {
    return media.reduce((acc, num) => acc + num, 0) / media.length
}

console.log(m(0, 10))
console.log(m(1,2,3,4,5))