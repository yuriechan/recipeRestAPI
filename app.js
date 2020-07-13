const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const { db, mysql } = require('./mySqlConfig')

db.connect((err) => {
    if (err) {
        return console.log(err)
    }
    console.log('MySQL Connected...')
})

const app = express()
const port = process.env.PORT || 3000
const server = app.listen(port)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
app.use('/', router)

console.log(`Server started on port ${port}`)


