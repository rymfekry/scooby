let scolotop = document.getElementById("scroll-top");
// console.log(scolotop);

window.addEventListener("scroll",function(){
    scrollkotop()
})


function scrollkotop(){
    if(window.scrollY > 500){
        scolotop.style.display="block"
    }
    else{
        scolotop.style.display="none"
    }
}
scrollkotop()

scolotop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
    })
})



const popupContainer = document.getElementById('popup-container');
let closepoper=document.getElementById("close-popar")
// Function to show 
function showPopup() {
popupContainer.style.display = 'flex';
}
// Function to hide 
function hidePopup() {
  // Hide popup 
  popupContainer.style.display = 'none';
}
closepoper.addEventListener("click",function(){
    hidePopup()
})


let sendmassage =document.getElementById("send-massage")
    let nameUser =document.getElementById("name")
    let emailUser =document.getElementById("email")
    let SupjectUser =document.getElementById("Supject")
    let reviewUser =document.getElementById("review")

    sendmassage.addEventListener("click",function(e){
        e.preventDefault()
        showPopup()
        nameUser.value=""
        emailUser.value=""
        SupjectUser.value=""
        reviewUser.value=""
       
        
    })