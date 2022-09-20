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
                "id": glove.id,
                "brand": glove.brand,
                "category": glove.category,
                "name": glove.name,
                "image": glove.image1,
                "price": glove.price,
                "size": glove.size,
                "pocket": glove.open,
                "position": glove.position,
                "description": glove.description
            }
        );
    })
    res.status(200).json(glovesList);
})

// GET specific glove by id
router.get("/gloves/:gloveId", (req, res) => {
    const gloves = readGloves();
    const specificGloveData = gloves.find(glove => glove.id === req.params.gloveId)

    if (!specificGloveData) {
        return res.status(400).json({error: "Glove not found. Please enter a valid glove ID."});
    }

    return res.status(200).json(specificGloveData);
})

module.exports = router;