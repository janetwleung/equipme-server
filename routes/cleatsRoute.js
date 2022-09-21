const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = express.Router();
const fs = require("fs");

function readCleats() {
    const cleatsFile = fs.readFileSync("./data/cleats.json");
    const cleatsData = JSON.parse(cleatsFile);
    return cleatsData;
}

// GET endpoint for list of all cleats
router.get("/cleats", (req, res) => {
    // const cleats = readCleats();
    // const cleatsList = cleats.map(cleat => {
    //     return (
    //         {
    //             "id": cleat.id,
    //             "brand": cleat.brand,
    //             "category": cleat.category,
    //             "name": cleat.name,
    //             "price": cleat.price,
    //             "description": cleat.description
    //         }
    //     );
    // })
    // res.status(200).json(cleatsList);
    knex   
        .select("*")
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
    const cleats = readCleats();
    const specificCleatData = cleats.find(cleat => cleat.id === req.params.cleatId);

    if (!specificCleatData) {
        return res.status(404).json({error: "Cleat not found. Please enter a valid cleat ID."})
    }

    return res.status(200).json(specificCleatData);
})

module.exports = router;