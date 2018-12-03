const express = require('express');
const router = express.Router();
const connection = require('../database');


router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM city', (err, rows, fields) => {
        if (!err) {
            res.setHeader("X-Total-Count", rows.length);
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    connection.query('SELECT * FROM city WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.setHeader("X-Total-Count", rows.length);
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const city = req.body;
    connection.query('UPDATE city SET ? WHERE id = ?', [city, id], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'City Updated'
            });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;