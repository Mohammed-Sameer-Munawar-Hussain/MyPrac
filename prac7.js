// DOM 
// let access = document.body
// console.log("the 1st child of access is ", access.firstChild)
// console.log("the 1st  Element child of access is ", access.firstElementChild)

// let changeNavBg = ()=>{
//     document.body.firstElementChild.firstElementChild.style.background = "yellow"
// }
// changeNavBg();
// // let changeNavBg2 = ()=>{
// //     document.body.firstElementChild.firstElementChild.firstElementChild.style.background = "green"
// // }
// // changeNavBg2();

// let selecting = document.getElementsByClassName("card")[0]
// let selecting = document.getElementById("card2")
// selecting.style.background = "grey"


// let selecting = document.querySelectorAll(".card")
// selecting[0].style.color = "grey"
// selecting[1].style.color = "black"
// selecting[2].style.color = "yellow"
// console.log(selecting) // wnt to add diff diff color or bg to seperate divs but its not working


// let selecting = document.querySelector("#card1")
// selecting.style.color = "blue"

// Matches Method //
// let mat = document.getElementById("h1")
// // console.log(mat)
// // console.log(mat.matches(".hed")) // when u call class it will show u true or false

// // Closest Method //
// let closestElem = document.getElementById("main")
// // // console.log(closestElem)
// // console.log(closestElem.closest(".p1"))

// // Contain Method //
// let containElem = document.getElementById("p1")
// // console.log(containElem)
// console.log(closestElem.contains(p1))


// // changing the 1st element of the nav bar to yellow color
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "yellow"

// // changing the 2nd element of the nav bar to red color
// document.getElementsByTagName("nav")[0].children[1].style.color = "red"

// changing the background color to green of the nav
// Array.from (document.getElementsByTagName("nav")).forEach((navItems) => {
//     navItems.style.background = "green";
// })// Used Array.from to convert nav into an array as foreach function works only on arrays

