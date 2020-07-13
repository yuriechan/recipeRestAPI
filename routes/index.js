// Build an Express server 
const express = require('express')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const router = express.Router()

router.get('/', function (res, req) {
    res.send("hello world")
})