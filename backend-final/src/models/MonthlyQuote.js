const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MonthlyQuoteSchema = new Schema({
  month: {
    type: String,
    required: true
  },

  // commerce_id: {
  //   type: String,
  //   required: true
  // },

  // user_id: {
  //   type: Number,
  //   required: true
  // },

  // items: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Item"
  //   }
  // ],

  // commerce: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Commerce"
  // },

  created_at: {
    type: Date,
    default: Date.now
  },

  update_at: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("MonthlyQuote", MonthlyQuoteSchema);
