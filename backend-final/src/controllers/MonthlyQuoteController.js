const mongoose = require('mongoose')

const MonthlyQuote = require("../models/Commerce");
const Commerce = require("../models/Commerce");

module.exports = {
    async showMonthlyQuote(req, res) {
        const monthlyQuote = await MonthlyQuote.find();

        return res.json(monthlyQuote);
    },

    async newMonthlyQuote(req, res){
        const monthlyQuote = await MonthlyQuote.create(req.body);

        // await Commerce.updateOne({ _id: monthlyQuote.user }, { $push: { monthlyQuote: monthlyQuote._id } });

        return res.json(monthlyQuote);
    },

    async updateMonthlyQuote(req, res){
        const monthlyQuote = await MonthlyQuote.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(monthlyQuote);
    },

    async destroyCMonthlyQuote(req, res){
        return MonthlyQuote.deleteOne({ _id: req.params.id });

        return res.send();
    },

    async report(req, res){
        const monthlyQuotes = await MonthlyQuote.find({ "user_id": req.params.id })

        return res.json(monthlyQuotes);
    },

    async reportMonth(req, res){
        const monthlyQuotes = await MonthlyQuote.find({ "month": req.params.id })

        return res.json({ message: "MonthlyQuote apagada"});
    },
}