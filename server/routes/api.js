var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Donor = mongoose.model('Donor');


router.route('/donors')
//creates a new donor
    .post(function (req, res) {

        var donor = new Donor();
        donor.FirstName = req.body.FirstName;
        donor.LastName = req.body.LastName;
        donor.ContactNumber = req.body.ContactNumber;
        donor.Email = req.body.Email;
        donor.BloodGroup = req.body.BloodGroup;
        donor.Location = req.body.Location;
        donor.Location.Ip = Ip(req);

        donor.save(function (err, donor) {
            if (err) {
                return res.send(500, err);
            }
            return res.json(donor);
        });
    })
//gets all donors
    .get(function (req, res) {
        Donor.find(function (err, donors) {
            if (err) {
                return res.send(500, err);
            }
            return res.send(200, donors);
        });
    });

router.route('/donors/:id')
//gets specified donor
    .get(function (req, res) {
        Donor.findById(req.params.id, function (err, donor) {
            if (err)
                res.send(err);
            res.json(donor);
        });
    }) 
//updates specified donor
    .put(function (req, res) {
        Donor.findById(req.params.id, function (err, donor) {
            if (err)
                res.send(err);
            if (!donor)
                res.send(500, "Not found");

            donor.FirstName = req.body.FirstName;
            donor.LastName = req.body.LastName;
            donor.ContactNumber = req.body.ContactNumber;
            donor.Email = req.body.Email;
            donor.BloodGroup = req.body.BloodGroup;
            donor.Location = req.body.Location;
            donor.Location.Ip = Ip(req);

            donor.save(function (err, donor) {
                if (err) {
                    return res.send(500, err);
                }
                return res.json(donor);
            });
        });
    })
//deletes the donor
    .delete(function (req, res) {
        Donor.remove({
            _id: req.params.id
        }, function (err) {
            if (err)
                res.send(err);
            res.json(true);
        });
    });

module.exports = router;

function Ip(req) {
    return req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
}