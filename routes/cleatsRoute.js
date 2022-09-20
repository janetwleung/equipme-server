const express = require("express");
const router = express.Router();
const fs = require("fs");

function readCleats() {
    const cleatsFile = fs.readFileSync("./data/cleats.json");
    const cleatsData = JSON.parse(cleatsFile);
    return cleatsData;
}

// GET endpoint for list of all cleats
router.use("/cleats", (req, res) => {
    const cleats = readCleats();
    const cleatsList = cleats.map(cleat => {
        return (
            {
                "id": cleat.id,
                "brand": cleat.brand,
                "category": cleat.category,
                "name": cleat.name,
                "price": cleat.price,
                "description": cleat.description
            }
        );
    })
    res.status(200).json(cleatsList);
})

module.exports = router