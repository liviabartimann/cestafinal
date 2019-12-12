const {Schema, model} = require("mongoose");

const CommerceSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  street_name: {
    type: String,
    required: true
  },

  street_number: {
    type: Number,
    required: true
  },

  neighborhood: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  state: {
    type: String,
    required: true
  },

  created_at: {
    type: Date,
    default: Date.now
  },

  update_at: {
    type: Date,
    default: Date.now
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  monthlyQuote: {
    type: Schema.Types.ObjectId,
    ref: "MonthlyQuote"
  }
});

module.exports = model("Commerce", CommerceSchema);
