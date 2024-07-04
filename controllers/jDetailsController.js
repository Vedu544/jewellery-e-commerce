const jewelleries = require("../config/jewellariessvhema")


const loadJitemsPage = async(req,res)=>{
    try{
        console.log("card id required",req.query.id)
        const cardId = req.query.id;
        const id = cardId;
        if (!cardId) {
            return res.status(400).send("Card ID is required");
        }
        console.log("Card Id:",cardId)
        const jewellery = await jewelleries.findById(id);
        console.log(jewellery)
        res.render("jDetails",{jewellery})
    }catch(error){
        res.status(500).json({error:error.message})

    }
}


module.exports = {
    loadJitemsPage
}
