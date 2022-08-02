var menu = document.querySelector(".menu")
var mobilemenu = document.querySelector(".mobilemenu")
var removeMenu= document.querySelector('.remove-menu')
var output =document.querySelector('.zero')
var incrementIcon =document.querySelector('.increase')
var decrementIcon =document.querySelector('.decrease')
var carticon =document.querySelector('.carticon')
var cartbox=document.querySelector('.cartbox')
var addToCart = document.querySelector('.addToCart')
var quantity = document.querySelector('.quantity')
var emptyCart=document.querySelector('.empty')
var deleteCart = document.querySelector('.delete')
var cartItems =document.querySelector('.cartItems')
var totalAmount =document.querySelector('.totalAmount')
var lightbox =document.querySelector('.lightbox')
var exitlightbox=document.querySelector('.exit-lightbox')
var productsDesktop=document.querySelectorAll('.product1')
// var entirePage=document.querySelector('.body')
var bigPicture =document.querySelector('.big-picture')
var thumbnail=document.querySelectorAll('.thumbnail')
var previousIcon=document.querySelector('.previousIcon')
var nextIcon=document.querySelector('.nextIcon')
var previousIconMobile=document.querySelector('.previousIconMobile')
var nextIconMobile=document.querySelector('.nextIconMobile')
var mobileDesignProducts=document.querySelectorAll('.mobilePics')
var bigPictureMobile =document.querySelector('.bigPictureMobile')

output.innerHTML= 0
// var outputCounter=1;
var picturecounter = 0;
var desktopProductItems=0
var productPictureCounter=0;
var imageCounterMobile = 1;

// console.log( mobileDesignProducts)
// var newArray=['Kennedy', 'Shina', 'Miracle', 'Leah']
  console.log(productsDesktop[1])
//4


nextIconMobile.addEventListener('click', () => {
    console.log(imageCounterMobile)


    if (imageCounterMobile < 4 ){
        bigPictureMobile.src= mobileDesignProducts[imageCounterMobile].src
        imageCounterMobile++
    }else {
        bigPictureMobile.src=  thumbnail[0].src
        imageCounterMobile = 1 
    }
})

previousIconMobile.addEventListener('click', () => {
    console.log(imageCounterMobile)


    if (imageCounterMobile  > 0) {
        bigPictureMobile.src= mobileDesignProducts[imageCounterMobile].src
        imageCounterMobile--
    } else if(imageCounterMobile === 0 ){
        bigPictureMobile.src= mobileDesignProducts[imageCounterMobile].src
        imageCounterMobile=mobileDesignProducts.length-1
        
    }        
  
})

// bigPicture.src=thumbnail[0].src

    nextIcon.addEventListener('click', () => {
        console.log(picturecounter)
        

        if (picturecounter < 4){
            bigPicture.src= thumbnail[picturecounter].src
            picturecounter++
        } else {
            bigPicture.src=  thumbnail[0].src
            picturecounter=1
            
             
        }
        // thumbnail[picturecounter].classList.add('opacity-40')
    })

    previousIcon.addEventListener('click', () => {
        console.log(picturecounter)

        if (picturecounter > 0) {
            bigPicture.src= thumbnail[picturecounter].src
            picturecounter--
        } else if(picturecounter === 0){
            bigPicture.src=  thumbnail[picturecounter].src
            picturecounter=thumbnail.length-1
            
        }        
        // thumbnail[picturecounter].classList.add('opacity-40')
    })

menu.addEventListener("click", () => {
    mobilemenu.classList.toggle('hidden');
    cartbox.classList.add('hidden');
    
})

removeMenu.addEventListener("click", () => {
    mobilemenu.classList.toggle('hidden');
    cartbox.classList.add('hidden');
    
    
})

exitlightbox.addEventListener("click", () => {
    lightbox.classList.toggle('lg:hidden');
})

// productsDesktop[desktopProductItems].addEventListener("click", () => {
//     lightbox.classList.replace('lg:hidden', 'lg:contents');
//     if(desktopProductItems < productsDesktop.length){
//         bigPicture.src=thumbnail[desktopProductItems].src
//         desktopProductItems++
//         picturecounter=desktopProductItems

//     } else {
//         desktopProductItems=0; 
//     }
    
// })

// for (desktopProductItems=0 ; desktopProductItems < productsDesktop.length; desktopProductItems++){

//     productsDesktop[desktopProductItems].addEventListener('click', () => {
//         lightbox.classList.replace('lg:hidden', 'lg:contents');
//         console.log(desktopProductItems)
       
//         // if (productPictureCounter < thumbnail.length){
//         //     bigPicture.src=thumbnail[productPictureCounter].src
//         //     productPictureCounter++
//         //     picturecounter=productPictureCounter;    
//         //   } else {
//         //     productPictureCounter=0
//         //     picturecounter=1

//         //  }
//         //  console.log(productPictureCounter)
//         //  console.log(picturecounter)

//     })
// }

productsDesktop[0].addEventListener('click', () => {
    lightbox.classList.replace('lg:hidden', 'lg:contents');
    bigPicture.src=thumbnail[0].src
    cartbox.classList.add('hidden');
    thumbnail[0].classList.add('opacity-40')
    

})

productsDesktop[1].addEventListener('click', () => {
    lightbox.classList.replace('lg:hidden', 'lg:contents');
    bigPicture.src=thumbnail[1].src
    cartbox.classList.add('hidden');
    

})

productsDesktop[2].addEventListener('click', () => {
    lightbox.classList.replace('lg:hidden', 'lg:contents');
    bigPicture.src=thumbnail[2].src
    cartbox.classList.add('hidden');
    

})

productsDesktop[3].addEventListener('click', () => {
    lightbox.classList.replace('lg:hidden', 'lg:contents');
    bigPicture.src=thumbnail[3].src
    cartbox.classList.add('hidden');
    

})





incrementIcon.addEventListener('click', () => {
    output.innerHTML++
    cartbox.classList.add('hidden');
    
})

decrementIcon.addEventListener('click',() => {
    console.log("Output value is" , output.innerHTML)
    cartbox.classList.add('hidden');
    

    if (output.innerHTML > 0){
        output.innerHTML--;
    }
    
    
})

carticon.addEventListener('click', () => {
    cartbox.classList.toggle('hidden')

    if(quantity.innerHTML <= 0) {
        emptyCart.classList.remove('hidden')
        cartItems.classList.add('hidden')
    }   
})


addToCart.addEventListener('click', () => {
    emptyCart.classList.add('hidden')
    cartItems.classList.remove('hidden')
    quantity.innerHTML= output.innerHTML;
    displayTotalAmount();
})

deleteCart.addEventListener('click', () => {
    emptyCart.classList.remove('hidden')
    cartItems.classList.add('hidden')
    outputCounter = 0;
    output.innerHTML=0
})


function displayTotalAmount(){
    totalAmount.innerHTML= "$"+ (125 * parseInt(quantity.innerHTML).toFixed(2));
}

