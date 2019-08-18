// this is to get the correct file path for html
const path = require("path");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    app.get("/survey", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}