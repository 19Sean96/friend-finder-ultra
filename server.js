const express = require("express");

// server init
const app = express();

// allows to connect to either heroku or local server
const PORT = process.env.PORT || 3000;

// data parsing init
app.use(express.urlencoded({extended: true }));
app.use(express.json);


// // ROUTER INIT
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

app.get("/", (req,res) => {
    console.log("Hello" + res);
});


// SERVER INIT
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
