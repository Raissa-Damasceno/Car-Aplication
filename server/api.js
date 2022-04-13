const cors = require('cors')
const express = require('express')
const app = express()
const carsJson = require('./cars.json')

app.use(cors())

app.get('/api/cars', (req, res) => {
    return res.json(carsJson)
});

app.listen('8000');