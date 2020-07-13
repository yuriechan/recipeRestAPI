// Build an Express server 
const express = require('express')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const router = express.Router()
const { db, mysql } = require('../mySqlConfig')

router.get('/', (req, res, next) => {
    res.send("hello world")
})

router.get('/recipes', (req, res, next) => {
    let sql = 'SELECT * FROM recipes'
    let query = db.query(sql, (err, results) => {
        if (err) return console.log(err)
        console.log(results)
        res.send(results)
    })
})

module.exports = router 