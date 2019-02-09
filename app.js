let express = require("express"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    app = express(),
    port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


app.get("/", function (req, res) {
    res.render("frontpage");
});

app.get("/blogs", function (req, res) {
    res.render("blogs");
});

app.get("/gears", function (req, res) {
    res.render("gears");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.listen(port, function () {
    console.log("App Server is Working!")
});