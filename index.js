const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!!!!!😁");
});

app.listen(prot, () => {
    console.log(`😁 App Running http://localhost:${port}`);
});