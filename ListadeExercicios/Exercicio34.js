function Caract(string1, string2) {
    let s1 = string1.toLowerCase().split('').sort().join('')
    let s2 = string2.toLowerCase().split('').sort().join('')
    return s1 === s2
}

console.log(Caract("abcd", "dcbaf"))