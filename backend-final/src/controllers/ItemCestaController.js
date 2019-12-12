const Item = require('../models/ItemCesta');

module.exports = {
 async createItem (req, res) {
    console.log("chegou aq")
    try {
        const item = await Item.create(req.body);

        return res.json(item);
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Error creating item" });
    }
},

 async listItens (req, res){
    console.log("chegou aq list")
    try {
        const item = await Item.find({});

        return res.json(item);
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Error listing item" });
    }
},
 

}