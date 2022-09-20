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
    const bats = readBats();
    const batsList = bats.map(bat => {
        return (
            {
                "id": bat.id,
                "brand": bat.brand,
                "name": bat.name,
                "image": bat.image1,
                "price": bat.price,
                "size": bat.size,
                "type": bat.type
            }
        );
    })

    res.status(200).json(batsList);
})

module.exports = router;