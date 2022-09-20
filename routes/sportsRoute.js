const express = require("express");
const router = express.Router();
const fs = require("fs");

function readSports() {
    const sportsFile = fs.readFileSync("./data/sports.json");
    const sportsData = JSON.parse(sportsFile);
    return sportsData;
}

// GET endpoint for list of sports offered
router.get("/sports", (req, res) => {
    const sports = readSports();
    const sportsList = sports.map(sport => {
        return (
            {
                "sport": sport.sport,
                "image": sport.image,
                "hoverImage": sport.hoverImage,
            }
        );
    });
    res.status(200).json(sportsList);
})

module.exports = router;