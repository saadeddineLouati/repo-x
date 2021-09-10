const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("This is home page.");
});

app.post("/", (req, res) => {
    res.send("This is home page with post request.");
});

app.listen(5000, () => {
    console.log("Server has started!")
})
