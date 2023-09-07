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

