const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', function(req, res) {
    Rental.find({}, function(err, foundRentals) {
        res.status(200).json(foundRentals);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Rental.findById(id, function(err, foundRental) {
        if (err) {
            res.status(422).send({ errors: [{ title: 'Rental Error', detail: 'Could not find Rental!'}] })
        }
        res.status(200).json(foundRental);
    });
});

module.exports = router;