const knex = require('knex')(require("../knexfile"));
const express = require("express");
const router = express.Router();
const fs = require("fs");

function readBats() {
    const batsFile = fs.readFileSync("./data/bats.json");
    const batsData = JSON.parse(batsFile);
    return batsData;
}

// GET all bats
router.get("/bats", (req, res) => {
    // const bats = readBats();
    // const batsList = bats.map(bat => {
    //     return (
    //         {
    //             "id": bat.id,
    //             "brand": bat.brand,
    //             "category": bat.category,
    //             "name": bat.name,
    //             "image": bat.image1,
    //             "price": bat.price,
    //             "size": bat.size,
    //             "type": bat.type,
    //             "description": bat.description
    //         }
    //     );
    // })

    // res.status(200).json(batsList);
    knex
        .select("*")
        .from("bats")
        .then(batsResponse => {
            res.status(200).json(batsResponse);
        })
        .catch(error => {
            res.status(500).json({error: "There has been an error fetching the data"})
        });
});

// GET specific bat by ID
router.get("/bats/:batId", (req, res) => {
    // const bats = readBats();
    // const specificBat = bats.find(bat => bat.id === req.params.batId);

    // if (!specificBat) {
    //     res.status(404).json({error: "Bat not found. Please enter a valid bat ID."})
    // }

    // res.status(200).json(specificBat);
    knex   
        .select("*")
        .from("bats")
        .where({uuid: req.params.batId})
        .then(batResponse => {
            res.status(200).json(batResponse[0]);
        })
        .catch(error => {
            res.status(400).json({error: "There has been an error fetching the data"});
        });
});

module.exports = router;