const {Schema, model} = require("mongoose");

const ItemCestaSchema = new Schema({
  description: {
    type: String,
    required: true
  },

  aumont: {
    type: Number,
    required: true
  },

  uniqueValue: {
    type: String,
    required: true
  },

});

module.exports = model("ItemCesta", ItemCestaSchema);