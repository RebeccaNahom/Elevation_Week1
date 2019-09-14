const a = 3
let b = 2
let c = 0 || 12
let d

b = c // b = 12
b++ // b = 12+1 
if(d){
  b = a // undefined
}

d = a + (b * c) //d = 3+(13*12) d = 159
d++ // d = 3+(13*12)+1 d = 160
b += 2 // = 15


console.log(a, b, c, d)