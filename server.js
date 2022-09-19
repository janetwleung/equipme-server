require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

// Allows front-end to interact with our API
app.use(cors());

// Allows us to serve static files
app.use("/images", express.static('./public/images'));

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})