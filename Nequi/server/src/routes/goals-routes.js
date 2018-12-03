const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM goal', (err, rows, fields) => {
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
    connection.query('SELECT * FROM goal WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const goal = req.body;
    connection.query('INSERT INTO goal SET ?', [goal], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Goal Created'
            });
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM goal WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Goal Deleted'
            });
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const goal = req.body;
    connection.query('UPDATE goal SET ? WHERE id = ?', [goal, id], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Goal Updated'
            });
        } else {
            console.log(err);
        }
    });
});

module.exports = router; 
