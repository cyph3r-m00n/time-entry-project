var mongoose = require("mongoose");

// Schema Setup

var timeEntrySchema = new mongoose.Schema({
    date: String,
    cust: String,
    description: String,
    author: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    ftcn: String,
    billcode: String,
    job: String,
    agr: String,
    starttime: String,
    endtime: String,
    totaltime: Number,
    mco: String,
    isArchived: Boolean
});

module.exports = mongoose.model("TimeEntry", timeEntrySchema);