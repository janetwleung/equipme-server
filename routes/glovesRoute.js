const express = require("express");
const router = express.Router();
const fs = require("fs");

function readGloves() {
    const glovesFile = fs.readFileSync("./data/gloves.json");
    const glovesData = JSON.parse(glovesFile);
    return glovesData;
}

// GET list of all gloves
router.get("/gloves", (req, res) => {
    const gloves = readGloves();
    const glovesList = gloves.map(glove => {
        return (
            {
                "brand": glove.brand,
                "name": glove.name,
                "image": glove.image1,
                "price": glove.price,
                "id": glove.id,
                "size": glove.size,
                "pocket": glove.open,
                "position": glove.position
            }
        );
    })
    res.status(200).json(glovesList);
})

module.exports = router;