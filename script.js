const searchForm = document.querySelector(".search-form");
const cartIte = document.querySelector(".cart-items-container");


const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(!e.composedPath().includes(searchBtn) && (!e.composedPath().includes(searchForm))){
            searchForm.classList.remove("active");
        }
    })
})
cartBtn.addEventListener("click", function(){
    cartIte.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(!e.composedPath().includes(cartBtn) && (!e.composedPath().includes(cartIte))){
            cartIte.classList.remove("active");
        }
    })
})
