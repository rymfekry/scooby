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


// kkkkkkkkkkkkkkkkkkkkkkkkkkk
let demoElement = document.getElementById("demo");

// shopppppppp
let NewData=JSON.parse(localStorage.getItem("productData")) ?? []
let cartStorage=[]

if(localStorage.cartData!=null){
  cartStorage=JSON.parse(localStorage.getItem("cartData"));
}
else{
  cartStorage=[]
}

let favStorage=[]
if(localStorage.favData!=null){
  favStorage=JSON.parse(localStorage.getItem("favData"));
}
else{
  favStorage=[]
}

getData()
async function getData(){
   try {
    let data = await fetch("product.json")
    NewData = await data.json()
    localStorage.setItem("productData",JSON.stringify(NewData))
    console.log(NewData);
   } catch (error) {
    console.log(error);
   }
    
}
// console.log(NewData[0].name);


function displayProducts(){
    NewData.forEach(function(item) {
      if(item.sale==true){
        let content = '';
        content += `
              <div class="col-lg-3 mb-3">
              <div class="card card-inner" style="width: 17rem;">
                <div class="stick-offer">
                  <p> Hot offer</p>
                 </div>
                <img src="${item.image}" class="card-img-top" alt="product-img">
                
                <div class="card-body">
                  <hr>
                  <p class="card-text name-item">${item.name}</p>
                  <h3 class="card-text text-liner brand-item">${item.brand}</h3>
                  <div class="price-item flex-contant">
                   <div class="price-item-info d-flex">
                    <p class="card-text price-item-noseal" id="price-item-seal">${item.price}$</p>
                    <p class="card-text price-item-seal" >${item.priceSale}$</p>
                   </div>
                    <div class="icon-item d-flex ">
                      <div class="cart-item item-cart-styl btn-shop-cart button-linner" id="${item.id}">
                        <i class="fa-solid fa-cart-shopping fa-bounce"></i>
                      </div>
                      <div class="love-item item-cart-styln btn-shop-favor button-linner" id="${item.id}"  >
                        <i class="fa-solid fa-heart-circle-plus"></i>
                      </div>
                    </div>
                    
                  </div>
                 
                  
                </div>
              </div>
            </div>
                `;
                
        demoElement.innerHTML += content;
      }
        else{
          let content = '';
        content += `
              <div class="col-lg-3 mb-3">
              <div class="card card-inner" style="width: 17rem;">
                <div class="stick-offer d-none">
                  <p> Hot offer</p>
                 </div>
                <img src="${item.image}" class="card-img-top" alt="product-img">
                
                <div class="card-body">
                  <hr>
                  <p class="card-text name-item">${item.name}</p>
                  <h3 class="card-text text-liner brand-item">${item.brand}</h3>
                  <div class="price-item flex-contant">
                   <div class="price-item-info d-flex">
                    <p class="card-text price-item-noseal d-none" id="price-item-seal">${item.price}$</p>
                    <p class="card-text price-item-seal" >${item.priceSale}$</p>
                   </div>
                    <div class="icon-item d-flex ">
                      <div class="cart-item item-cart-styl  btn-shop-cart  button-linner" id="${item.id}">
                        <i class="fa-solid fa-cart-shopping fa-bounce"></i>
                      </div>
                      <div class="love-item item-cart-styl btn-shop-favor  button-linner" id="${item.id}" >
                        <i class="fa-solid fa-heart-circle-plus"></i>
                      </div>
                    </div>
                    
                  </div>
                 
                  
                </div>
              </div>
            </div>
                `;
                
        demoElement.innerHTML += content;
        }
        // console.log(item.price);


    });
}
displayProducts()





let searchInput=document.getElementById("search-input")
let searchBtn =document.getElementById("search-btn")
searchBtn.addEventListener("click",function(){
  // e.preventDefault()
  demoElement.innerHTML = "";
  NewData.forEach(function(item){
    let searhValue= searchInput.value
    if(item.brand.toLowerCase().includes(searhValue.toLowerCase())){
      if(item.sale==true){
        let content = '';
        content += `
              <div class="col-lg-3 mb-3">
              <div class="card card-inner" style="width: 17rem;">
                <div class="stick-offer">
                  <p> Hot offer</p>
                 </div>
                <img src="${item.image}" class="card-img-top" alt="product-img">
                
                <div class="card-body">
                  <hr>
                  <p class="card-text name-item">${item.name}</p>
                  <h3 class="card-text text-liner brand-item">${item.brand}</h3>
                  <div class="price-item flex-contant">
                   <div class="price-item-info d-flex">
                    <p class="card-text price-item-noseal" id="price-item-seal">${item.price}$</p>
                    <p class="card-text price-item-seal" >${item.priceSale}$</p>
                   </div>
                    <div class="icon-item d-flex ">
                      <div class="cart-item item-cart-styl  btn-shop-cart  button-linner" id="${item.id}">
                        <i class="fa-solid fa-cart-shopping fa-bounce"></i>
                      </div>
                      <div class="love-item item-cart-styl btn-shop-favor button-linner"id="${item.id}"  >
                        <i class="fa-solid fa-heart-circle-plus"></i>
                      </div>
                    </div>
                    
                  </div>
                 
                  
                </div>
              </div>
            </div>
                `;
                
        demoElement.innerHTML += content;
      }
        else{
          let content = '';
        content += `
              <div class="col-lg-3 mb-3">
              <div class="card card-inner" style="width: 17rem;">
                <div class="stick-offer d-none">
                  <p> Hot offer</p>
                 </div>
                <img src="${item.image}" class="card-img-top" alt="product-img">
                
                <div class="card-body">
                  <hr>
                  <p class="card-text name-item">${item.name}</p>
                  <h3 class="card-text text-liner brand-item">${item.brand}</h3>
                  <div class="price-item flex-contant">
                   <div class="price-item-info d-flex">
                    <p class="card-text price-item-noseal d-none" id="price-item-seal">${item.price}$</p>
                    <p class="card-text price-item-seal" >${item.priceSale}$</p>
                   </div>
                    <div class="icon-item d-flex ">
                      <div class="cart-item item-cart-styl  btn-shop-cart  button-linner"id="${item.id}" >
                        <i class="fa-solid fa-cart-shopping fa-bounce"></i>
                      </div>
                      <div class="love-item item-cart-styl btn-shop-favor  button-linner" id="${item.id}"  >
                        <i class="fa-solid fa-heart-circle-plus"></i>
                      </div>
                    </div>
                    
                  </div>
                 
                  
                </div>
              </div>
            </div>
                `;
                
        demoElement.innerHTML += content;
        }
       

      }
    });
  
  searchInput.value=""
  // console.log(searhValue);
  
})

  let cartButtons= document.querySelectorAll(".btn-shop-cart")
  let cartCount=document.getElementById("cart-count")
  console.log(cartCount.textContent);
  let curntindex=1
 
  cartButtons.forEach(function(item){
    item.addEventListener("click",function(){
      cartStorage.push(NewData[item.id])
      localStorage.setItem("cartData",JSON.stringify(cartStorage))
     
      cartCount.textContent=curntindex++
      displayProducts()

    })
    // console.log(item);
  })
  
  let shopFavour= document.querySelectorAll(".btn-shop-favor")
  shopFavour.forEach(function(item){
    item.addEventListener("click",function(){
      favStorage.push(NewData[item.id])
      localStorage.setItem("favData",JSON.stringify(favStorage))
     
      
      displayProducts()

    })
    // console.log(item);
  })







































//  console.log(NewData[1].price);
// add to cart

// let cartCount=document.getElementById("cart-count")
// let arr=[];

//  function addToCart(id){
//   arr.push(id)
//   localStorage.setItem("userCart",JSON.stringify(arr))
//   let items= JSON.parse(localStorage.getItem("userCart"));
//   // alert(arr)
//   cartCount.innerHTML = items.length;
//   // ele.classlist.add("disaplead")
//   // $(ele).attr('disaplead','disaplead')

//  }
//   let arr=[];
//   let cartIcon= document.querySelectorAll(".item-cart-styl")
//   let cartCount=document.getElementById("cart-count")

//   cartIcon.forEach(function(item) {
//     item.addEventListener("click",function(){

//       arr.push(item.id)
//       localStorage.setItem("userCart",JSON.stringify(arr))
//       let items= JSON.parse(localStorage.getItem("userCart"));
//       console.log();

//      if(items.includes(item.id))

//     console.log("kkk");
//     })
// });

//  function GetCartItems(item){
//   let items= JSON.parse(localStorage.getItem("userCart"));
//   // for(let i=0; i<items.length ;i++){
//   //   console.log(items[i]);
//   // }
//   // console.log(items);
  
  
  
//   console.log(NewData);
//   console.log(NewData);
//  }
