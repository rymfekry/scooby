let btnSignUp = document.getElementById("btn-signup")
let btnLogIn = document.getElementById("btn-login")
let loginContant =document.getElementById("login-contant")
let signupContant =document.getElementById("signup-contant")

let linksignup = document.getElementById("link-signup")

let clicksign =document.getElementById("click-sign")
let clicklogin =document.getElementById("click-login")



btnSignUp.addEventListener("click",function(e){
    e.preventDefault()

   
    clickSignup()

})

clicksign.addEventListener("click",function(e){
    e.preventDefault()

   
    clickSignup()
})

function clickSignup(){
    signupContant.style.display="block"
    loginContant.style.display="none"
    btnSignUp.style.width="70%"
    btnSignUp.style.backgroundColor="#fbe5da"
    linksignup.style.color = "#0000009a"
    btnLogIn.style.backgroundColor ="transparent"
}
// ***********************************

btnLogIn.addEventListener("click",function(e){
    e.preventDefault()

   
    clickloginn()

})

clicklogin.addEventListener("click",function(e){
    e.preventDefault()

   
    clickloginn()
})


function clickloginn(){
    loginContant.style.display="block"
    signupContant.style.display="none"
    btnLogIn.style.width="70%"
    btnLogIn.style.backgroundColor="#fbe5da"
    // linksignup.style.color = "#0000009a"
    btnSignUp.style.backgroundColor ="transparent"
}

