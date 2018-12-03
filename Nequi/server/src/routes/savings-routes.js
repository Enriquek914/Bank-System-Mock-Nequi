const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM saving', (err, rows, fields) => {
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
    connection.query('SELECT * FROM saving WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const saving = req.body;
    connection.query('INSERT INTO saving SET ?', [saving], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Saving Created'
            });
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM saving WHERE id = ?', [id], (err, rows, field) => {
        if (!err) {
            res.json({
                status: 'Saving Deleted'
            });
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const saving = {
        id: req.body.id,
        savingName: req.body.savingName,
        balance: req.body.balance,
        createAt: req.body.createAt,
        updatedAt: req.body.updatedAt,
        active: req.body.active,
        Account_id: req.body.Account_id
    }

    if (req.body.transactionType == 'Insert') {
        connection.query('SELECT availableBalance FROM account WHERE id = ?', [saving.Account_id], (err, rows, field) => {
            if (!err) {
                res.json(rows[0]);
            } else {
                console.log(err);
            }
        });
    }
});

module.exports = router; 
