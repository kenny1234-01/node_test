const express = require('express');
const app = express();
require('dotenv').config();
const prot = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World!!!!!😁");
});

app.listen(prot, () => {
    console.log(`😁 App Running http://localhost:${prot}`);
});