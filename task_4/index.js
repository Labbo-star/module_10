function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let result = Math.floor(Math.random() * (100 - 0 + 1) + 0)
console.log(result)