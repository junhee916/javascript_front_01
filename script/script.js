/*
* test 1
*/

// var hw = document.getElementById('hw')

// hw.addEventListener('click', function(){
//     alert("Hello world")
// })

/*
* test 2
*/

// const mode = document.getElementById("jsmode");

// mode.addEventListener("click", function(){

//     if(mode.innerText === "바뀌기 전 text"){
//         mode.innerText = "바뀐 text!";
//     }
//     else { ("
//         mode.innerText = "바뀌기 전 text";
//     }
// })

const wbtn = document.getElementById("white_btn");
wbtn.addEventListener("click", function() {

    document.getElementById("target").className = "white"

})

const bbtn = document.getElementById("black_btn");
bbtn.addEventListener("click", function(){

    document.getElementById("target").className = "black"

});

const borderbtn = document.getElementById("border_btn");
borderbtn.addEventListener("click", function() {

    document.getElementById("target").classList.add("border");

})
