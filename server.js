const express = require('express')
const path = require('path')
const static = require('serve-static')
const app = express()

app.use('/', static(path.join(__dirname, 'html')))
app.use('/script', express.static(__dirname + '/script'))

const PORT = 5000 || 7000

app.listen(PORT, console.log("connected server..."))