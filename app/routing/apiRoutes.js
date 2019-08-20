const friendData = require("../data/friends");
// ===============================================================================
// ROUTING

// ===============================================================================

module.exports = function(app) {
    app.get("/api/friends", (req,res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req,res) => {
        console.log(req);
    });

}