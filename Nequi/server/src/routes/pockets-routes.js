const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM pocket', (err, rows, fields) => {
        if (!err) {
            res.setHeader("X-Total-Count", rows.length);
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM pocket WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const pocket = req.body;
    connection.query('INSERT INTO pocket SET ?', [pocket], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Pocket Created'
            });
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM pocket WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Pocket Deleted'
            });
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const pocket = req.body;
    connection.query('UPDATE pocket SET ? WHERE id = ?', [pocket, id], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Pocket Updated'
            });
        } else {
            console.log(err);
        }
    });
});

module.exports = router; 
