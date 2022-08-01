var menu = document.querySelector(".menu")
var mobilemenu = document.querySelector(".mobilemenu")
var removeMenu= document.querySelector('.remove-menu')
var carticon =document.querySelector('.carticon')
var cartbox=document.querySelector('.cartbox')
var addToCart = document.querySelector('.addToCart')
var quantity = document.querySelector('.quantity')
var emptyCart=document.querySelector('.empty')
var deleteCart = document.querySelector('.delete')
var cartItems =document.querySelector('.cartItems')



menu.addEventListener("click", () => {
    mobilemenu.classList.toggle('hidden');
    cartbox.classList.add('hidden');
    
})

removeMenu.addEventListener("click", () => {
    mobilemenu.classList.toggle('hidden');
    cartbox.classList.add('hidden');
    
    
})


carticon.addEventListener('click', () => {
    cartbox.classList.toggle('hidden')
})

