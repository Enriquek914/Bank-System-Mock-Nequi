const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM account INNER JOIN accountType ON account.AccountType_id = accountType.id', (err, rows, fields) => {
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
    connection.query('SELECT * FROM account WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const account = req.body;
    connection.query('INSERT INTO account SET ?', [account], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Account Created'
            });
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM account WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Account Deleted'
            });
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const account = req.body;
    connection.query('UPDATE account SET ? WHERE id = ?', [account, id], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Account Updated'
            });
        } else {
            console.log(err);
        }
    });
});

module.exports = router; 
