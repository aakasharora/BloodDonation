var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donorSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    FirstName: String,
    LastName: String,
    BloodGroup: Number,
    Location: {
        Longitude: Number,
        Latitude: Number,
        Ip: String
    },
    ContactNumber: String,
    Email: String
});

mongoose.model('Donor', donorSchema);
