const express = require('express');
const router = express.Router();
const connection = require('../database');
const user = require('../models/user');


router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM user INNER JOIN city ON user.City_id = city.id', (err, rows, fields) => {
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
    connection.query('SELECT * FROM user WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const user = req.body;
    connection.query('INSERT INTO user SET ?', [user], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'User Created'
            });
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM user WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'User Deleted'
            });
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const user = req.body;
    connection.query('UPDATE user SET ? WHERE id = ?', [user, id], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'User Updated'
            });
        } else {
            console.log(err);
        }
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [username, password], (err, rows, fields) => {
        if (typeof rows !== 'undefined' && rows.length == 0) {
            res.sendStatus(404);
        } else {
            res.sendStatus(204);
        }
    });
});

module.exports = router; 
