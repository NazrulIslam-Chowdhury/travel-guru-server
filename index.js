const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const destinations = require('./data/destinations.json')
const hotels = require('./data/hotels.json')

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/destination', (req, res) => {
    res.send(destinations);
})

app.get('/destination/:id', (req, res) => {
    const id = req.params.id;
    const selectedDestinations = destinations.find(d => d.id === id)
    res.send(selectedDestinations);
})

app.get('/hotels', (req, res) => {
    res.send(hotels);
})
app.get('/hotels/:id', (req, res) => {
    const id = req.params.id;
    const selectedHotels = hotels.find(h => h._id == id)
    res.send(selectedHotels);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_places = hotels.filter(h => h.category_id == id);
    res.send(category_places);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})