// // Exercise 1

// // console.log (myPplList)
// // if (p1.age == p2.age) 
// //     if (p1.city == p2.city) {
// //         console.log (p1.name + " wanted to date " + p2.name + ".")
// //     }
  
// //     else {
// //        console.log (p1.name + " wanted to date " + p2.name + ", but couldn't.")
// // }


// // Exercise 2


// // let p1 = {
// //     name: "Gil",
// //     age: 24,
// //     city: "TLV",
// // }

// // let p2 = {
// //     name: "Dor",
// //     age: 24,
// //     city: "RD",
// // }

// // let myPplList = [p1 ,p2]

// // p1.name = "Gal"
// // myPplList.splice(1)

// // Exercise 3



// // let p1 = {
// //         name: "Gil",
// //         age: 24,
// //         city: "TLV",
// //     }
    
// // let p2 = {
// //         name: "Dor",
// //         age: 24,
// //         city: "RD",
// //     }
    
// // let myPplList = [p1 ,p2]

// // let p3 = {
// //     name: "Gad",
// //     age: 33,

// // }

// // let p4 = {
// //     name: "Tal",
// //     age: 32,
// // }

// // let anotherPplList = [p3,p4]

// // myPplList = [...anotherPplList, ...myPplList]
// // console.log (myPplList)


// // excercise 4

// // let libraay = {
// //     books: [
// //         book1 = {title:"Harry Potter" , author: "J. K. rawling"},
// //         book2 = {title: "Lord of the Rings", author: "Tolkin"},
// //         book2 = {title: "The Hobbit", author: "Tolkin"},


// //     ]

// // }

// // myPplList = [...myPplList, ...libraay.books]

// // console.log(myPplList)

// // extensions: 

// const date = 3

// const kitchen = {
//     owner: "Geraldine",
//     hasOven: false, // choose one
//     fridge: {
//         price: 500,
//         works: false, // choose one
//         items: [
//             { name: "cheese", expiryDate: 7 },
//             { name: "raddish", expiryDate: 2 },
//             { name: "bread", expiryDate: 1 }
//         ]
//     }
// }

// let hasOven = kitchen.hasOven
// const fridgeWorks = kitchen.fridge.works
// const raddish = kitchen.fridge.items[1].name
// const raddisEexpired = (date - kitchen.fridge.items[1].expiryDate)
// const paymentForFridge = (kitchen.fridge.price / 2)

// // console.log(paymentForFridge);


// if (hasOven && fridgeWorks) {
//         console.log(kitchen.owner + "'s " + raddish + 
//         "  expired " + raddisEexpired + " day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the "
//         + raddish + " in");
//         }

// if (!hasOven && fridgeWorks) {
//     console.log(kitchen.owner + " s " + raddish + 
//     " expired " + raddisEexpired + " day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the "
//      + raddish + " in.");
       
// }

// if (hasOven && !fridgeWorks) {
//     console.log(kitchen.owner + "'s " + raddish + 
//     " expired "+ raddisEexpired + " day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the " 
//     + raddish + " in. And she'll have to pay "
//     + paymentForFridge +" to fix the fridge." );
// }

// if (!hasOven && !fridgeWorks) {
//     console.log( kitchen.owner + "'s "+ raddish + " expired "+ raddisEexpired +
//     " day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the "+ raddisEexpired +
//     " in. And she'll have to pay "+ paymentForFridge + " to fix the fridge.");
    
    
// }

