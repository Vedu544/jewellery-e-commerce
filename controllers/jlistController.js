const jewelleries = require("../config/jewellariessvhema")


const loadpage = (req, res) => {
    res.render("jlist")

}

const sort = async (req, res) => {

    console.log(102)
    if (!req.body) {
        console.log('req.body is undefined');
        return res.status(400).json({ error: 'No request body' });
    }
    // console.log(req.body.jewellaryId,100)

    try {
        const { jewelleryId, current } = req.body;
        console.log(current);
        if (current == "high to low") {
            const jewellery = await jewelleries.find({_id:{$in:jewelleryId}}).sort({price:-1})
            res.json({ jewellery })
        }
        if (current == "low to high") {
            const jewellery = await jewelleries.find({_id:{$in:jewelleryId}}).sort({price:1})
            res.json({ jewellery })
        }

    } catch (error) {
        console.log(error)
        res.json(error)
    }
}


//filteri
const filter = async (req, res) => {
    try {
        const {
            ringsC,
            NecklacesC,
            ChainsC,
            EarringsC,
            PendantsC,
            braceletsC,
            nosepinsC,
            banglesC,
            goldcoinsC,
            managalsutraC,
            maleG,
            femaleG,
            UnisexG,
            gold,
            diamond,
            sliver
        } = req.body;

        const categories = [];
        if (ringsC) categories.push("Rings")
        if (NecklacesC) categories.push("Necklaces")
        if (ChainsC) categories.push("Chains")
        if (EarringsC) categories.push("Earrings")
        if (PendantsC) categories.push("Pendents")
        if (braceletsC) categories.push("bracelets")
        if (nosepinsC) categories.push("nosepins")
        if (goldcoinsC) categories.push("goldcoins")
        if (managalsutraC) categories.push("mangalsutra")

        const genders = []
        if(maleG)genders.push("male")
        if(femaleG)genders.push("female")
        if(UnisexG)genders.push("Unisex")

        let query = {};
        if(categories.length > 0){
            query.categories = { $in:categories}
        }
        if(genders.length > 0){
            query.gender = {$in:genders}
        }
        
        const filtered = await jewelleries.find(query);
        console.log(filtered)
        
        res.json({filtered})
        }catch (error){
        console.log("sorry,categories are under maintenance",error)
        res.status(500).json({error})
    }   
}
const categories = async(req,res)=>{
    try{
        console.log(jewelleries)
        console.log(req.body)
        const {category} = req.body
        const jewellery = await jewelleries.find({category:category})
        console.log(jewellery)
        res.json({jewellery})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }
}
const genders = async(req,res)=>{
    try{
        console.log("genders function called")
        console.log(req.body,"hello")
        const { gender } = req.body
        const jewellery = await jewelleries.find({gender:gender})
        console.log(jewellery)
        res.json({jewellery})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }
}


module.exports = {
    loadpage,
    sort,
    filter,
    categories,
    genders

}

