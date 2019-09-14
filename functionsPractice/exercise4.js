function isOdd(numbers){
    for (const m of numbers) {
        if(m % 2 == 1){
            console.log(m);     
        }
    }
}

const numbers = [11, 10, 9, 8, 6]
let mmm = isOdd(numbers)
