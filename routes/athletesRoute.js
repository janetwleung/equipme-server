const knex = require('knex')(require("../knexfile"));
const express = require("express");
const router = express.Router();

router.get("/athletes", (req, res) => {
    knex
        .select("id", "name", "sport_id", "image", "position", "number")
        .from("athletes")
        .then(athletesResponse => {
            res.status(200).json(athletesResponse);
        })
        .catch(error => {
            res.status(500).json({error: "There has been an error fetching the data"})
        });
});

router.get("/athletes/:athleteId", (req, res) => {
    knex   
        .select("*")
        .from("athletes")
        .where({id: req.params.athleteId})
        .then(athleteResponse => {
            res.status(200).json(athleteResponse[0]);
        })
        .catch(error => {
            res.status(400).json({error: "There has been an error fetching the data"});
        });
});

module.exports = router;