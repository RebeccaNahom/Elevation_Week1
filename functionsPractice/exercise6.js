const calculator = {
    add: function(num1,num2){
        let sum = num1 + num2
        return sum
        },
    subtract: function(num1, num2){
        let difference = num1 - num2
        return difference
            }
}



const result1 = calculator.add(20, 2) //22
const result2 = calculator.subtract(30, 9) //21

console.log(calculator.subtract(result1, result2)) //should print 1
