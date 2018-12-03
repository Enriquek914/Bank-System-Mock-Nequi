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
    const account = {
        id: req.body.id,
        nameAccount: req.body.nameAccount,
        number: req.body.number,
        expirationDate: req.body.expirationDate,
        minBalance: req.body.minBalance,
        availableBalance: req.body.availableBalance,
        totalBalance: req.body.totalBalance,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
        active: req.body.active,
        User_id: req.body.User_id,
        AccountType_id: req.body.AccountType_id
    }

    if (req.body.transactionType == 'Deposit') {
        account.availableBalance += Number(req.body.amount);
        account.totalBalance += Number(req.body.amount);
        connection.query('UPDATE account SET ? WHERE id = ?', [account, id], (err, rows, field) => {
            if (!err) {
                res.json({
                    status: 'Successful Deposit'
                });
            } else {
                console.log(err);
            }
        });
    } else {
        if (req.body.transactionType == 'Withdraw') {
            if (account.availableBalance >= req.body.amount) {
                account.availableBalance -= Number(req.body.amount);
                account.totalBalance -= Number(req.body.amount);
                connection.query('UPDATE account SET ? WHERE id = ?', [account, id], (err, rows, field) => {
                    if (!err) {
                        res.json({
                            status: 'Successful Withdraw'
                        });
                    } else {
                        console.log(err);
                    }
                });
            }
        }
    }
});

module.exports = router; 
