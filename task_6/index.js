let massive = [1, 1, 1, 2]
let result = true
for (let i = 0; i < massive.length; i++) {
    if (massive[0] !== massive[i]) {
        result = false
    }
}
console.log(result)