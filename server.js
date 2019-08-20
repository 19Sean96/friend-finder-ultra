const express = require("express");
// this is to get the correct file path for html


// server init
const app = express();

// allows to connect to either heroku or local server
const PORT = process.env.PORT || 8080;

// data parsing init
app.use(express.urlencoded({extended: true }));
app.use(express.json());
// // ROUTER INIT
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


// SERVER INIT
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
