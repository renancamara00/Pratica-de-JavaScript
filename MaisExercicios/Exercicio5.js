function MaiorPrimeiro(n1, n2) {
    if(n1 >= n2 && typeof n2 == typeof n1) {
        return n1 >= n2
    } else {
        return false
    }
}

console.log(MaiorPrimeiro(1000, '0'))