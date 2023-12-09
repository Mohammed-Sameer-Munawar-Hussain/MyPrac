// // for in loop //

// let sum = 0
// let n = 4
// // let n = prompt("enter the value on n")
// n = Number.parseInt(n)
// for (let i = 0; i <= n; i++) {
//     sum += (i + 1)
// }
// console.log(' sum of first ' + n + ' natural number is ' + sum)

// for in loop //

// let marksList = {
//     harry: 78,
//     rasiya: 20,
//     hamud: 24,
//     talat: 47,
//     bariq: 57
// }
// // //for of loop //
// // for (let studentsName in marksList){
// //     console.log("Marks of "+ studentsName+ " is " + marksList[studentsName])
// // }

// // for of loop //
// for (let studentName of "hamud"){
//     console.log ( studentName)
// }
 
// while loop //

// let n = 5
// n = Number.parseInt(n)

// let i = 0;
// while(i < n){
//     console.log(i*2)
//     i++;
// }


// do while loop //
// let n = 15
// n = Number.parseInt(n)

// let i = 9;
// do {
//     console.log(i**2)
//     // i++
// } while (i / n);

// functions //

// let a = 5;
// b = 8;
// h = 4;

// function fstFun(x , y) {
//     console.log("see below")
//     return x**2 + y**2 + 2*x*y
// }

// console.log( "The avg is " + fstFun(a , b))
// console.log(  "The avg is " + fstFun(b , h))
// console.log(  "The avg is " + fstFun(h , a))

// const sum = (p , q)=>{
//     return p - q
// }
// // console.log(sum(a , h))

// const newVar = ()=>{
//     console.log("prac3")
//     return "hello"
    
// }
// let v = newVar();// if u just keep newVar() it will return prac3 but
// console.log(v)// if u wnt to return somthing u need to make the newVar() as a variable whatever ur returning it will get stored in the new var that we are making

// let resume = {
//     name : "hussain",
//     age : "34",
//     place : "khilwat",
//     occupation : "bussiness",
// }

// for (let i = 0; i < Object.keys(resume).length; i++){ 

//     console.log(Object.keys(resume)[1] + " : " + resume[Object.keys(resume)[1]])
    // console.log(resume)
// }

// for(let keys in resume){
    // console.log(keys)
    // console.log(resume[keys])
// }

// for (let key of "hussain"){
//     console.log(key)
// }

// while loop until we get our main number //

// let mn = 5
// let i 
// // i = Number.parseInt(i)
// while (i != mn) {
//     i = prompt("enter the correct number")
//     prompt("try again")
//     // if(i != mn){
//     //     prompt("enter the correct number")
//     // }else{
//     //     prompt("try again")
//     // }
// }
// alert("u have enter the correct number")

// arrow funtion //

// let a = 1
// b = 2
// c = 3
// d = 4
// let mean = (a, b, c, d) => {
//     return (a + b + c)/2 + (c + d + a)/2
// }

// // console.log(mean(a,b,c,d))
// console.log(mean(9, 2, 4 , 7))
