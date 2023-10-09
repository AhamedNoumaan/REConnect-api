const express = require('express');
require('dotenv').config();
const postRoutes = require("./routes/posts")

const app = express();

app.use(postRoutes);
app.use(express.json());



app.get('/', (req, res) => {
    res.json({ message: "Welcome Page" });
});

app.use((req, res, next) => {
    res.status(404).json({ message: "Page Not Found" });
});

module.exports = app;
