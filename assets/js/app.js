let spanheader=document.getElementById("pnk-span-text")
const texts = ["Cat.", "Dog"];
let currentIndex = 0;


function updateText() {
    spanheader.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }
setInterval(updateText, 2000);



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






let sliderimages =Array.from(document.querySelectorAll(".slider-container img"))
let sildeNumberElement= document.getElementById("slide-number")
let slideCount=sliderimages.length

let currentSlide = 1

let nextBtn=document.getElementById("next")

let prevBtn=document.getElementById("prev")

let pagnetionElement = document.createElement("ul")

pagnetionElement.setAttribute("id","pagnation-ul")

for(i=1;i<=slideCount; i++){

  let pagnetionItem = document.createElement("li")
  pagnetionItem.setAttribute("data-index",i)
  pagnetionItem.appendChild(document.createTextNode(i))
  pagnetionElement.appendChild(pagnetionItem)

}
document.getElementById("indicators").appendChild(pagnetionElement)

let pagnationCreatUl =document.getElementById("pagnation-ul")


let pagnationPolits =Array.from(document.querySelectorAll("#pagnation-ul li"))

for(var i=0 ;i<pagnationPolits.length ;i++){
  pagnationPolits[i].addEventListener("click",function(){
    currentSlide=parseInt(this.getAttribute("data-index"))
    theCheaker()
  })
}



theCheaker()

function nextslide(){
  if (currentSlide >= slideCount) {

    currentSlide=1
    theCheaker()
  } 
  else {
  currentSlide++
  theCheaker()
  }
  
}

setInterval(function() {
  nextslide()
  theCheaker()
},2000 );

function prevSlide(){
 
  if (currentSlide<=1) {
    
    currentSlide=slideCount

    theCheaker()
   
  } 
  else {
  currentSlide--
  theCheaker()
  }

}
nextBtn.addEventListener("click",function(){
  nextslide()
})

prevBtn.addEventListener("click",function(){
  prevSlide()
})

function theCheaker(){

  sildeNumberElement.textContent=(currentSlide)+" "+"of"+" "+(slideCount)

  removeAllActive()

  sliderimages[currentSlide-1].classList.add("active")

  pagnationCreatUl.children[currentSlide-1].classList.add("active")
 

}
function removeAllActive(){
  sliderimages.forEach(function(img){
    img.classList.remove("active")
  })
  pagnationPolits.forEach(function(polits){
    polits.classList.remove("active")
  })
  
}


// counter
let textcontainer=document.querySelectorAll(".text-countar h4")

if(window.scrollY > 2500){

  textcontainer.forEach(function(item){
    let number=+item.textContent
    let incrasenumber=parseInt((5/100)*number)
    
    item.textContent=0
    
    let counter=setInterval( function()  {
        
        item.textContent=+item.textContent +incrasenumber
        
        if(+item.textContent>=number){
          
            item.textContent=number
            clearInterval(counter)
        }
    },100);

  })
}


// kj
let conctInput=document.getElementById("conct-input")
let conctBtn=document.getElementById("conect-btn")
conctBtn.addEventListener("click",function(){
  conctInput.value=""
})
// mmmmmmmmmmmmmm
