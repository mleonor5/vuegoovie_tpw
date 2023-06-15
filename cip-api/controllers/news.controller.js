const db = require("../models/index.js");
const News = db.news
const { Op, ValidationError } = require('sequelize');

exports.getAllNews = async (req, res) => {
    News.findAll()
        .then((result) => {
            res.status(200).json(result)
        }).catch((error) => {
            res.status(400).send('error')
        })
}


exports.getOneNews = async (req, res) => {
    try {

        let news = await News.findOne({ where: { summary: req.params.summary } })

        if (news === null)
            res.status(404).json({
                success: false, msg: `Cannot find any news with summary ${req.params.summary}.`
            });
        else
            res.json({ success: true, news: news });
    }
    catch (err) {
        res.status(500).json({
            success: false, msg: `Error retrieving news with summary ${req.params.summary}.`
        });
    };
};