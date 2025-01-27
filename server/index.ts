import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("API de Anne SAUNIER");
})

app.listen(port, () => {
    console.log(`Server lancé sur http://localhost:${port}`);
});

