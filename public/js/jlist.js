const getJewelleries = async () => {
    const params = new URLSearchParams(window.location.search)
    console.log(params)
    const category = params.get("category")
    const gender = params.get("genders")
    console.log(category)
    console.log(gender)
    const res2 = await fetch('/jlist/category', {
        method: "post",
        body: JSON.stringify({ category }),
        headers: { 'Content-Type': 'application/json' }
    })
    const res3 = await fetch('/jlist/genders', {
        method: "post",
        body: JSON.stringify({ gender }),
        headers: { 'Content-Type': 'application/json' }
    })
    const res = await fetch("/getJewelleries", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = category ? await res2.json() : await res.json()
    const data2 = gender ? await res3.json() : data


    try {
        if (!res.ok) {
            throw new Error('Failed to fetch jewellery data');
        }
        printjewellery(data2)
        console.log("getJewelleries Ended");
    } catch (error) {
        console.error('Error fetching jewellery data:', error.message);
    }
}
// window.addEventListener('load',getJewelleries) 

const sortfrontend = () => {

    const def = document.querySelector(".Default")
    const lowtohigh = document.querySelector(".low-to-high")
    const hightolow = document.querySelector(".high-to-low")
    const selected = document.querySelector(".btn-text")

    def.addEventListener("click", async () => {
        selected.textContent = def.textContent
        await sortBackend()
    })

    lowtohigh.addEventListener("click", async () => {
        selected.textContent = lowtohigh.textContent
        await sortBackend()
    })

    hightolow.addEventListener("click", async () => {
        selected.textContent = hightolow.textContent
        console.log(selected.textContent)
        await sortBackend()
    })
}


const categoryFilter = document.querySelectorAll('.checkbox-list')

// console.log(categoryFilter)

categoryFilter.forEach(item => {
    item.addEventListener('click', () => {
        console.log("clicked on category");
    });
})








const rings = document.querySelector('.checkbox-list .rings')
const necklaces = document.querySelector('.checkbox-list .necklaces')
const earrings = document.querySelector('.checkbox-list .earrings')
const pendants= document.querySelector('.checkbox-list .pendants')
const bracelets = document.querySelector('.checkbox-list .bracelets')
const nosepins = document.querySelector('.checkbox-list .nosepins')
const bangles = document.querySelector('.checkbox-list .bangles')
const goldcoins = document.querySelector('.checkbox-list .gold-coins')
const mangalsutra = document.querySelector('.checkbox-list .Mangalsutra')

rings.addEventListener("click",()=>{
    // console.log("clicked to rings")
    location.assign("/jlist?category=rings")
})
necklaces.addEventListener("click", () => {
    console.log("clicked to necklace")
    location.assign("/jlist?category=necklaces")
})

earrings.addEventListener("click", () => {
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

mangalsutra.addEventListener("click", () => {
    console.log("clicked to goldcoins")
    location.assign("/jlist?category=mangalsutra")
})

//for each function for category filter
























sortBackend = async () => {
    const selected = document.querySelector(".btn-text")
    const current = selected.textContent
    console.log(current)
    const cards = document.querySelectorAll(".j-card")
    const jewelleryId = []

    cards.forEach(card => {
        jewelleryId.push(card.firstElementChild.getAttribute("value"))
    })

    const res = await fetch("/jList/sortList", {
        method: "POST",
        body: JSON.stringify({ jewelleryId, current }),
        headers: { 'ContentType': 'application/json' }
    })
    const data = await res.json()
    printjewellery(data)
    console.log(data);
}















const printjewellery = (data) => {
    // const data = await res.json();
    const parentDiv = document.querySelector(".cards-section .cards-div");
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
    }
    const jArray = data.jewellery;
    console.log(jArray)
    jArray.forEach((jewellery) => {


        parentDiv.innerHTML += `
            <div class="j-card" id="j-cards">
                <input class="j-id" type="hidden" value=${jewellery._id}>
               
                <div class="j-card-element-img">
                        <img class="img1" src=${jewellery.picture1}>
                        <img class="img2" src=${jewellery.picture2}> 
                </div>
                <cardelement class="j-card-element" id="j-card-name">
                    <cardname class="name">
                        ${jewellery.name}
                    </cardname>
                </cardelement>

                <div class="j-card-element">
                    <div class="price">
                        &#8377;${jewellery.price}
                    </div>
                </div>
            </div>`;
    });

    opendetails();

}
const opendetails = () => {
    const images = document.querySelectorAll(".cards-section .cards-div .j-card .j-card-element-img")


    images.forEach((image) => {
        const id = image.previousElementSibling.value
        // console.log(id)
        image.addEventListener("click", () => {
            console.log("click")
            window.open(`/jdetails?id=${id}`);
        })
    })
}



// ShopbyCategory = async () => {
//     const rings = document.querySelectorAll('.checkbox-list .rings')
//     const necklaces = document.querySelectorAll('.checkbox-list .necklaces')
//     const earrings = document.querySelectorAll('.checkbox-list .earrings')
//     const pendants= document.querySelectorAll('.checkbox-list .pendants')
//     const bracelets = document.querySelectorAll('.checkbox-list .bracelets')
//     const nosepins = document.querySelectorAll('.checkbox-list .nosepins')
//     const bangles = document.querySelectorAll('.checkbox-list .bangles')
//     const goldcoins = document.querySelectorAll('.checkbox-list .gold-coins')
//     const mangalsutra = document.querySelectorAll('.checkbox-list .managalsutra')


//     console.log(rings)
// }

//     rings.forEach(ring => {
//         ring.addEventListener('click', () => {
//             console.log("Clicked on rings");
//             // location.assign("/jlist?category=rings")
//         });
//     });

//     necklaces.forEach(necklace => {
//         necklace.addEventListener('click', () => {
//             console.log("Clicked on necklaces");
//             location.assign("/jlist?category=necklaces")
//         });
//     });

//     earrings.forEach(earring => {
//         earring.addEventListener('click', () => {
//             console.log("Clicked on earrings");
//             location.assign("/jlist?category=earrings")
//         });
//     });

//     pendants.forEach(pendant => {
//         pendant.addEventListener('click', () => {
//             console.log("Clicked on pendants");
//             location.assign("/jlist?category=pendants")
//         });
//     });

//     bracelets.forEach(bracelet => {
//         bracelet.addEventListener('click', () => {
//             console.log("Clicked on bracelets");
//             location.assign("/jlist?category=bracelets")
//         });
//     });

//     nosepins.forEach(nosepin => {
//         nosepin.addEventListener('click', () => {
//             console.log("Clicked on nosepins");
//             location.assign("/jlist?category=nosepins")
//         });
//     });

//     bangles.forEach(bangle => {
//         bangle.addEventListener('click', () => {
//             console.log("Clicked on bangles");
//             location.assign("/jlist?category=bangles")
//         });
//     });

//     goldcoins.forEach(goldcoin => {
//         goldcoin.addEventListener('click', () => {
//             console.log("Clicked on goldcoins");
//             location.assign("/jlist?category=goldcoins")
//         });
//     });

//     mangalsutra.forEach(mangalsutra => {
//         mangalsutra.addEventListener('click', () => {
//             console.log("Clicked on mangalsutra");
//             location.assign("/jlist?category=mangalsutra")
//         });
//     });
// }


const ShopByGenders = ()=>{
    const males = document.querySelector('.checkbox-list .maleGs')
    const female = document.querySelector('.checkbox-list .female')
    const unisex = document.querySelector('.checkbox-list .unisex')

    males.forEach(male => {
        male.addEventListener('click', () => {
            console.log("Clicked on male");
            location.assign("/jlist?genders=men")
        });
    });

    female.forEach(female => {
        female.addEventListener('click', () => {
            console.log("Clicked on female");
            location.assign("/jlist?genders=female")
        });
    });

    unisex.forEach(unisex => {
        unisex.addEventListener('click', () => {
            console.log("Clicked on unisex");
            location.assign("/jlist?genders=unisex")
        });
    });
}

// ShopByTypes = ()=>{
//     const gold = document.querySelectorAll('.checkbox-list .gold')
//     const diamond = document.querySelectorAll('.checkbox-list .diamond')
//     const sliver =  document.querySelectorAll('.checkbox-list .sliver')

//     gold.forEach(gold => {
//         gold.addEventListener('click', () => {
//             console.log("Clicked on gold");
//             location.assign("/jlist?type=gold")
//         });
//     });

//     diamond.forEach(diamond => {
//         diamond.addEventListener('click', () => {
//             console.log("Clicked on diamond");
//             location.assign("/jlist?type=diamond")
//         });
//     });

//     sliver.forEach(sliver => {
//         sliver.addEventListener('click', () => {
//             console.log("Clicked on sliver");
//             location.assign("/jlist?type=sliver")
//         });
//     });

// }









window.addEventListener('load', async () => {
    await getJewelleries()
    await sortfrontend()
    await sortBackend()
    await printjewellery()
    // await ShopbyCategory()
    await ShopByGenders()
    // await ShopByTypes()
})


