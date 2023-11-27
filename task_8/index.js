let massive = new Map();

massive.set(1, "big");
massive.set(2, "middle");
massive.set(3, "small");

massive.forEach((value, key) =>{
    console.log(`Ключ - ${key}, значение - ${value}`)
})
