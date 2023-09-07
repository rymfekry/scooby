
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
let scolotop = document.getElementById("scroll-top");


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











let  careContainer= document.getElementById("imgcarecontainer")
let  careChild =document.querySelectorAll(".care-child")
// let  mainChild =document.getElementsByClassName("main-child")
// console.log(mainChild);
// 
careChild.forEach(function(item) {
    item.addEventListener("click",function(){
        let raplaceimg = item.src
        careContainer.src = raplaceimg
        removeColor()
        item.classList.add("main-child")
    })
});
function removeColor(){
    careChild.forEach(function(item) {
    item.classList.remove("main-child")
    })
}

let btnIncrase=document.getElementById("btn-incrase")
let btndecrase=document.getElementById("btn-decrase")
let counterInfo=document.getElementById("counter-info")

btnIncrase.addEventListener ("click",function(){
    counterInfo.textContent=(+counterInfo.textContent)+1
})

btndecrase.onclick = function(){
    if(+counterInfo.textContent>0){
        counterInfo.textContent=+counterInfo.textContent-1
    }
}


let tapcontant = document.querySelectorAll(".tab-contant")
let taptitel = document.querySelectorAll(".tab-titel")
// console.log(tapcontant,taptitel);

    
    taptitel.forEach(function(item){
            
        item.addEventListener("click",function(){
            // console.log(item);
        removeActive(taptitel)
        
        item.classList.add("activee")
        let dataId = item.dataset.id
        removeActive(tapcontant)
        document.getElementById(dataId).classList.add("activee")
    
            // console.log(dataId);
        })
        
    })

    function removeActive(items){
        items.forEach(function(element){
            element.classList.remove("activee")
        })

    }





    const reviowBtn = document.getElementById('reviow-btn');
    const inputName = document.getElementById('name');
    const inputEmail= document.getElementById('email');
    const inputMasege = document.getElementById('review');
    const inputReating = document.getElementById('rating');

    
    reviowBtn.addEventListener("click", function(e){
      e.preventDefault()
      showPopup()
      inputName.value=""
      inputEmail.value=""
      inputMasege.value=""
      inputReating.value=""
    });




    // Get the popup container element
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


    let dateCart =document.getElementById("cart-date")
    let optionCart =document.getElementById("inputGroupSelect01")
    let addCart =document.getElementById("add-to-cart")
    addCart.addEventListener("click",function(e){
        e.preventDefault()
        showPopup()
        dateCart.value=""
        optionCart.value=""
        counterInfo.textContent="0"
    })


    let slidePosition = 0;
const slides = document.getElementsByClassName('slides')[0];
const slidesLength = slides.querySelectorAll('img').length;

function nextSlide() {
  if (slidePosition === slidesLength - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function prevSlide() {
  if (slidePosition === 0) {
    slidePosition = slidesLength - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  slides.style.transform = `translateX(-${slidePosition * 100}%)`;
}

updateSlidePosition();

