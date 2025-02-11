const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!!!!!😁 Welcome Sarawut");
});

app.listen(port, () => {
    console.log(`😁 App Running http://localhost:${port}`);
});