// loop through Arrays //
// Map Method //
let var1 = [2, 32, 98, 45]
let b = var1.map((a, p, o)=>{// the three elements are value, index and array
    // console.log(a + p, o)
    return a + 1
})
// console.log(b)// map is used to make a new array
// console.log(var1)

// filter Method //

let var2 = [2, 32, 98, 45 ]
let b2 = var2.filter((a)=>{
    return a%2==0 // as per our given condition it will return a new array
})
// console.log(b2)

// Reduce Method

let var3 = [2, 32, 98, 48 ]
let c = var3.reduce((a, c, o)=>{
    return a+c
})
// console.log(c)

// making a variable function //

let var4 = [2, 32, 98, 45 ]
let varFuns = ((a, p) => {
    return a-p   
})
let d= var4.reduce(varFuns)
// console.log(d)
// console.log(varFuns(4,3))

// adding new number to an array as in taking data frm users//

// let var5 = [2, 32, 98, 45 ]
// let a = prompt("whats ur age")
// a = Number.parseInt(a)
// var5.push(a)
// console.log(var5)

// adding new numbers to an array until 0 is added 

// let var6 = [2, 32, 98, 45 ]
// let e;
// do {
    //     e = prompt("whats ur age")
    //     e = Number.parseInt(e)
    //     var6.push(e)
    // }while (e!=0)
    // console.log(var6)
    // alert("u hav entered the correct number")
    
// filter for number div by 10    
// let var7 = [2, 32, 98, 45, 10, 70, 90, 100]
// let f = var7.filter((p)=>{
//     return p % 10 == 0
// })
// console.log(f)

// square of given array // 

// let var8 = [2, 32, 98, 45, 10, 70, 90, 100]
// let g = var8.map((p)=>{
//     return p**2
// })
// console.log(g)

// multyplying the array using reduce method

// let var9 = [2, 32, 98, 45, 10, 70, 90, 100]
// let h = var9.reduce((p, q)=>{
//     return p*q
// })
// console.log(h)





