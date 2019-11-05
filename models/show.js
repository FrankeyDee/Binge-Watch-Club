const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema ({
    ///title, id, synopsis, rating, etc. defined here
})

const Show = mongoose.model("Show", showSchema);

module.exports = Show;