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


let tBodyCart= document.getElementById("t-body-cart")

// console.log(tBodyCart);
// cartStorage=[]
// let items= JSON.parse(localStorage.getItem("userCart"));
let cartStorage=[]
if(localStorage.cartData!=null){
    cartStorage=JSON.parse(localStorage.getItem("cartData"));
}
else{
    cartStorage=[]
}

function displayProducts(){
    cartStorage.forEach(function(item) {
    //   console.log(item);
    //    let totalprie=document.getElementById("totalprie")

        let content = '';
        content += `
        
        <tr>
            <td ><a href="" class="btn-remove-col"><i class="far fa-times-circle"></i></a></td>
            <td><img src="${item.image}" alt="" srcset=""></td>
            <td>${item.name}</td>
            <td>${item.priceSale}$</td>
            <td><input type="number" value="1" id="totalprie" min="1"></td>
           
        </tr> 
        
        `
        
        tBodyCart.innerHTML += content;
   
    });
}
displayProducts()

let btnRemove= document.querySelectorAll(".btn-remove-col")
// console.log(btnRemove);
// item.parentElement.parentElement.remove()


btnRemove.forEach(function(item) {
        item.addEventListener("click",function(e){
            e.preventDefault()
            cartStorage.splice(item,1)
            item.parentElement.parentElement.remove()
            cartStorage=JSON.parse(localStorage.getItem("cartData"));
        })
        // console.log(item);
    });


let tBodyFav= document.getElementById("t-body-fav")

let favStorage=[]
if(localStorage.favData!=null){
  favStorage=JSON.parse(localStorage.getItem("favData"));
}
else{
  favStorage=[]
}

function displayFavour(){
    favStorage.forEach(function(item) {
    //   console.log(item);
    //    let totalprie=document.getElementById("totalprie")

        let content = '';
        content += `
        
        <tr>
            <td ><a href="" class="btn-remove-fav"><i class="far fa-times-circle"></i></a></td>
            <td><img src="${item.image}" alt="" srcset=""></td>
            <td>${item.name}</td>
            <td>${item.priceSale}$</td>
            
           
        </tr> 
        
        `
        
        tBodyFav.innerHTML += content;
   
    });
}
displayFavour()



let btnRemovefav= document.querySelectorAll(".btn-remove-fav")
// console.log(btnRemove);
// item.parentElement.parentElement.remove()


btnRemovefav.forEach(function(item) {
        item.addEventListener("click",function(e){
            e.preventDefault()
            favStorage.splice(item,1)
            item.parentElement.parentElement.remove()
            favStorage=JSON.parse(localStorage.getItem("favData"));
        })
        // console.log(item);
    });






    // function deletTask(i){
    //     cartStorage.splice(i,1)
    //     // localStorage.setItem("cartData",JSON.stringify(cartStorage))
    //     // displayProducts()
    //     console.log(cartStorage);
    //   }

// // let tbody=document.getElementById("t-body-cart")

// tBodyCart.addEventListener("click",function(e){
//     e.preventDefault()
//         if(e.target.classList.contains("btn-remove-col")){
//             let item = e.target;
//             let id = item.getAttribute("data-id")
//             let storagedata =JSON.parse(localStorage.getItem("cartData"))
//             let newdata=storagedata.filter(function(item){
             
//                 return item.id != id
//             })
//             localStorage.setItem("cartData",JSON.stringify(newdata))
//              item.parentElement.parentElement.remove()
//             }
//         })