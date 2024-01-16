// settimeout //
// let a = alert('hello bro')

// let c = setTimeout(() => {
//     alert("wait for a while")
// }, 2000);

// let b= prompt("do u wanna stay here")
// if("no"==b){
//     clearTimeout(c)
// }
// else{
//     setTimeout(() => {
//         alert("thanks for staying with us")
//     }, 7000);
// }

// const sum = (a,b)=>{
//     console.log("its working "+ (a+b))
//     // a+b
// }

// setTimeout(sum, 5000, 4,6)

// Set intervel //

// setInterval(() => {
//     alert("hi again")
// }, 3000);

// Events //
// let a = document.getElementById("btn")
// a.onclick = ()=>{
//     let b = document.getElementById("btn")
//     b.innerHTML = "clicked"
//     console.log(b)
// }

// add event listner //

// btn.addEventListener('click', function (k) {
//     alert("hi there")
// })

// btn.addEventListener('click', function (k) {
//     alert("hi there2")
// })

// remove event listner //
// let q = function (k) {
//     alert("hi there")
// }
// let w = function (k) {
//     alert("hi there2")
// }
// btn.addEventListener('click', q)

// btn.addEventListener('click', w)

// let a = prompt("what ur favrt number")

// if (a =="2") {
//     btn.removeEventListener('click', q)
// }

// redirecting to other pages using addeventlestner //
// document.getElementById("btn").addEventListener("click", function() {
//     window.location = "https://bard.google.com/chat"
//     win.focus();
// })
// document.getElementById("btn2").addEventListener("click", function() {
//     window.location = "https://app.wordtune.com/editor/write/57e6f095-610c-4d73-abc4-51bb1f76aa41"
//     win.focus();
// })
// document.getElementById("btn3").addEventListener("click", function() {
//     window.location = "https://freelance101academy.thinkific.com/users/sign_in"
//     win.focus();
// })

setInterval(()=>{
    document.querySelector("#bulb").classList.toggle("bulb")
}, 150)



