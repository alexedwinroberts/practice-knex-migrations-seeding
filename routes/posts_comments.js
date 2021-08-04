const express = require('express')
const knex = require('knex')(require('../knexfile'));
const router = express.Router();

router.route('/').get((req, res) => { 
    knex
        .select("*")
        .from('posts')
        .then((data) => {
            res.json(data)
        })
        .catch((err) => res.send("Error getting data"));
});

module.exports = router;