let massive = [1, 2, 3, true, 'list', false, 0]
let a=b=c=d=0
for (let i = 0; i < massive.length; i++) {
    if (typeof massive[i] === 'number') {
        if (massive[i] % 2 === 0 && massive[i] !== 0){
            a++
        }
        else if (massive[i] === 0) {
            c++
        }
        else {
            b++
        }
    } else {
        d++
    }
}

console.log('Количеств четных элементов:', a)
console.log('Количеств нечетных элементов:', b)
console.log('Количеств нулевых элементов:', c)
console.log('Количеств других элементов:', d)
