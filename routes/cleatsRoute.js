const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = express.Router();

router.get("/cleats", (req, res) => {
    knex   
        .select("uuid", "brand_id", "brand", "category", "name", "image1", "price", "metal")
        .from("cleats")
        .then(cleatsResponse => {
            res.status(200).json(cleatsResponse);
        })
        .catch(error => {
            res.status(500).json({error: "There has been an error fetching the data"})
        });
})

// GET endpoint for specific cleat
router.get("/cleats/:cleatId", (req, res) => {
    knex
        .select("*")
        .from("cleats")
        .where({uuid: req.params.cleatId})
        .then(cleatResponse => {
            res.status(200).json(cleatResponse[0]);
        })
        .catch(error => {
            res.status(500).json({error: "There has been an error fetching the data"});
        });
})

module.exports = router;