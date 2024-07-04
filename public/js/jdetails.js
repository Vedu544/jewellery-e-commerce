const booknow = async()=>{
    const book = document.querySelectorAll('.addtocart')
    book.forEach(button =>{
        button.addEventListener("click",()=>{
            console.log("click")
            window.open(`/add-to-cart`)
        })
    })
};

const getfavorites = async()=>{
    const favorite = document.querySelectorAll('.favorites')
    favorite.forEach(button =>{
        button.addEventListener("click",()=>{
            console.log("click")
            window.open(`/addtofavorites`)
        })
    })
};

// JavaScript code to handle quantity increment and decrement
let quantity = 0; // Default quantity value
document.querySelector('.decrement').addEventListener('click', function() {
    if (quantity > 0) {
        quantity--;
        document.querySelector('.qty-in-text').textContent = quantity;
    }
});
document.querySelector('.increment').addEventListener('click', function() {
    quantity++;
    document.querySelector('.qty-in-text').textContent = quantity;
});






window.addEventListener('load',async()=>{
    await booknow();
    await getfavorites();
   
})
