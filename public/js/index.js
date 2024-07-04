//home.js
//slider
const slides = document.querySelectorAll(".slide");
var counter = 0;

const slideimage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

const goprev = () => {
    if (counter != 0) {
        counter--;
        slideimage(); // Invoke the function  
    }
};

const gonext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideimage(); // Invoke the function  
    }
};


//search bar
function searchjewellery() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const jewelleryCards = document.querySelectorAll('.j-card')

    jewelleryCards.forEach(card => {
        const name = card.querySelector('.name').textContent.toLowerCase();
        if (name.includes(searchInput)) {
            card.style.display = '';
        } else {
            card.style.display = 'none'
        }
    });
}


//category section js
const shopCategory = () => {
    const rings = document.querySelector(".shop-rings")
    const necklaces = document.querySelector(".shop-Necklaces")
    const chains = document.querySelector(".shop-Chains")
    const Earrings = document.querySelector(".shop-Earrings")
    const pendants = document.querySelector(".shop-Pendants")
    const bracelets = document.querySelector(".shop-bracelets")
    const nosepins = document.querySelector(".shop-nosepins")
    const bangles = document.querySelector(".shop-bangles")
    const goldcoins = document.querySelector(".shop-goldcoins")
    const mangalsutra = document.querySelector(".shop-mangalsutra")

    console.log(rings)
    rings.addEventListener("click", () => {
        console.log("clicked to rings")
        location.assign("/jlist?category=rings")
    })
    necklaces.addEventListener("click", () => {
        console.log("clicked to necklace")
        location.assign("/jlist?category=necklaces")
    })
    chains.addEventListener("click", () => {
        console.log("clicked to chains")
        location.assign("/jlist?category=chains")
    })
    Earrings.addEventListener("click", () => {
        console.log("clicked to Earrings")
        location.assign("/jlist?category=earrings")
    })
    pendants.addEventListener("click", () => {
        console.log("clicked to pendants")
        location.assign("/jlist?category=pendants")
    })
    bracelets.addEventListener("click", () => {
        console.log("clicked to bracelets")
        location.assign("/jlist?category=bracelets")
    })
    nosepins.addEventListener("click", () => {
        console.log("clicked to nosepins")
        location.assign("/jlist?category=nosepins")
    })
    bangles.addEventListener("click", () => {
        console.log("clicked to bangles")
        location.assign("/jlist?category=bangles")
    })
    goldcoins.addEventListener("click", () => {
        console.log("clicked to goldcoins")
        location.assign("/jlist?category=goldcoins")
    })

    goldcoins.addEventListener("click", () => {
        console.log("clicked to goldcoins")
        location.assign("/jlist?category=mangalsutra")
    })
}


const shopgenders = () => {
    const maleG = document.querySelector(".shop-mens")
    const femaleG = document.querySelector(".shop-womens")
    const unisexG = document.querySelector(".shop-unisex")

    maleG.addEventListener("click", () => {
        console.log("clicked to maleG")
        location.assign("/jlist?genders=men")
    })
    femaleG.addEventListener("click", () => {
        console.log("clicked to femaleG")
        location.assign("/jlist?genders=women")
    })
    unisexG.addEventListener("click", () => {
        console.log("clicked to unisexG")
        location.assign("/jlist?genders=unisex")
    })

}



// //header section 
// let pop = document.getElementById("open")
// let popup = document.getElementById("pop-close")
// function openPopup(){
//     pop.classList.add("openpopup")
// }
// function closePopup(){
//     popup.classList.remove("openpopup")
// }

//login section

// Collect profile data and display on another profile page




document.querySelector('.favorites').addEventListener('click',function(){
    console.log("clicked")
    window.open('/addtofavorites')
})


document.querySelector('.your-cart').addEventListener('click',function(){
    console.log("clicked")
    window.open('/add-to-cart')
})


document.querySelector('.profile').addEventListener('click',function(){
    console.log("clicked")
    window.open('/profile')
})


window.addEventListener('load',async()=>{
    await shopCategory()
    await shopgenders()
    await slideimage()
    await gonext()
    await goprev()
    await searchjewellery()
})








