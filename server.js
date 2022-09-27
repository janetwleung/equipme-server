require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const glovesRoute = require("./routes/glovesRoute");
const batsRoute = require("./routes/batsRoute");
const cleatsRoute = require("./routes/cleatsRoute");
const sportsRoute = require("./routes/sportsRoute");
const athletesRoute = require("./routes/athletesRoute");

// Allows front-end to interact with our API
app.use(cors());

// Allows us to serve static files
app.use("/images", express.static('./public/images'));

// Link routes
app.use(glovesRoute);

app.use(batsRoute);

app.use(cleatsRoute);

app.use(sportsRoute);

app.use(athletesRoute);

app.get("/", (req, res) => {
    res.send("Welcome to my API")
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})
