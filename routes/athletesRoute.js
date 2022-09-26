const knex = require('knex')(require("../knexfile"));
const express = require("express");
const router = express.Router();

router.get("/athletes", (req, res) => {
    knex
        .select("id", "name", "sport_id", "image1", "image2", "glove_id", "bat_id", "cleat_id")
        .from("athletes")
        .then(athletesResponse => {
            res.status(200).json(athletesResponse);
        })
        .catch(error => {
            res.status(500).json({error: "There has been an error fetching the data"})
        });
});

module.exports = router;