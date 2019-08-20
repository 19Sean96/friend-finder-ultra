const friendData = require("../data/friends");
// ===============================================================================
// ROUTING

// ===============================================================================

module.exports = function(app) {
    app.get("/api/friends", (req,res) => {
        console.log(res);
        res.json(friendData);
    });

}