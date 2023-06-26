const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { LocalStorage } = require('node-localstorage')

const localStorage = new LocalStorage('./data-reservations')

const loadReservations = () => JSON.parse(localStorage.getItem('reservations') || '{}')
const saveReservations = reservations => localStorage.setItem('reservations', JSON.stringify(reservations, null, 2))

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded())
    .delete('/cancel', (req, res) => {
        const reservations = loadReservations()
        const { showID, name } = req.body
        const reservation = reservations[showID].find(reservation => reservation.name === name)
        reservations[showID] = reservations[showID].filter(reservation => reservation.name !== name)
        saveReservations(reservations)
        res.json({ canceled: true, showID, ...reservation })
    })
    .post('/', (req, res) => {
        const reservations = loadReservations()

        let count
        if (!req.body.count) {
            res.status(500)
            return res.json({ error: `A ticket count is required to reserve tickets.`})
        }
        if (!req.body.name) {
            res.status(500)
            return res.json({ error: `A name is required to reserve tickets.`})
        }
        if (!req.body.showID) {
            res.status(500)
            return res.json({ error: `A showID is required to reserve tickets.`})
        }

        count = parseInt(req.body.count)
        var reservation = { name: req.body.name, guests: req.body.count }
        reservations[req.body.showID].push(reservation)
        saveReservations(reservations)
        res.json({ success: true, showID: req.body.showID, ...reservation})
    })
    .get('/reservations/:showID', (req, res) => {
        const reservations = loadReservations()
        res.json(reservations[req.params.showID] || [])
    })
    .get('/', (req, res) => {
        const reservations = loadReservations()
        res.json(reservations)
        console.log('reservations returned')
    })

app.listen(3002, () => console.log(`reservation service running on port 3002`))
