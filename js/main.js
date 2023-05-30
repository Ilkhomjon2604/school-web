// toggle-btn --- btn 
// dropdown-menu--- dropdown 

let btnToggle = document.querySelector(".toggle-btn")
let dropDown = document.querySelector(".dropdown-menu")

btnToggle.onclick = function(){
    dropDown.classList.toggle('open')
}
    
