const express = require("express");
const app = express();
const compression = require("compression");
const { getLocation } = require("./db");

app.use(compression());

app.use(express.static("./public"));

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get("/location/:id", async (req, res) => {
    try {
        const { rows } = await getLocation(req.params.id);
        console.log("location rows: ", rows);
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
