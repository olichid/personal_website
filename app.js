let express = require("express"),
    app = express(),
    port = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    console.log("Aha")
});

app.listen(port, function () {
    console.log("App Server is Working!")
});