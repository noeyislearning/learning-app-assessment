// Import required modules
const express = require('express') // Express is a web framework for Node.js
const bodyParser = require('body-parser') // Body-parser is a middleware that parses incoming request bodies
const cors = require('cors') // CORS is a middleware that enables cross-origin resource sharing
const { LocalStorage } = require('node-localstorage') // LocalStorage is a module that provides a simple key-value store

// Create a new instance of LocalStorage
const localStorage = new LocalStorage('./data')

// Define functions to load and save shows and reservations from LocalStorage
const loadShows = () => JSON.parse(localStorage.getItem('../db/shows/shows') || '[]')
const saveShows = shows => localStorage.setItem('../db/shows/shows', JSON.stringify(shows, null, 2))
const loadReservations = () => JSON.parse(localStorage.getItem('../db/reservations/reservations') || '{}')
const saveReservations = reservations => localStorage.setItem('../db/reservations/reservations', JSON.stringify(reservations, null, 2))

// Create a new instance of Express
const app = express()
    .use(cors()) // Enable CORS
    .use(bodyParser.json()) // Parse JSON request bodies
    .use(bodyParser.urlencoded({ extended: true })) // Parse URL-encoded request bodies
    .put('/release-seats', (req, res) => { // Handle PUT requests to /release-seats
        let show, count, shows = loadShows() // Load shows from LocalStorage
        if (!req.body.showID || !req.body.count) { // Check if showID and count are present in the request body
            res.status(500) // Set response status to 500 (Internal Server Error)
            return res.json({ error: 'A showID and count are required to release seats'}) // Return an error message
        }
        count = parseInt(req.body.count) // Parse count as an integer
        show = shows.find(s => s._id === req.body.showID) // Find the show with the given showID
        if (!show) { // Check if show is not found
            res.status(500) // Set response status to 500 (Internal Server Error)
            return res.json({ error: `Cannot find show with id: ${req.body.showID}`}) // Return an error message
        }
        show.reserved -= count // Release the specified number of seats
        if (show.reserved < 0) { // Check if reserved seats is less than zero
            show.reserved = 0 // Set reserved seats to zero
        }
        saveShows(shows) // Save shows to LocalStorage
        res.json(show) // Return the updated show object
    })
    .put('/hold-seats', (req, res) => { // Handle PUT requests to /hold-seats
        let show, count, shows = loadShows() // Load shows from LocalStorage
        if (!req.body.showID || !req.body.count) { // Check if showID and count are present in the request body
            res.status(500) // Set response status to 500 (Internal Server Error)
            return res.json({ error: 'A showID and count are required to hold seats'}) // Return an error message
        }
        count = parseInt(req.body.count) // Parse count as an integer
        show = shows.find(s => s._id === req.body.showID) // Find the show with the given showID
        if (!show) { // Check if show is not found
            res.status(500) // Set response status to 500 (Internal Server Error)
            return res.json({ error: `Cannot find show with id: ${req.body.showID}`}) // Return an error message
        }
        const remainingSeats = show.houseSize - show.reserved // Calculate the number of remaining seats
        if (remainingSeats < count) { // Check if there are not enough remaining seats
            res.status(500) // Set response status to 500 (Internal Server Error)
            return res.json({ error: `cannot reserve ${count} seats. Only ${remainingSeats} remaining.`}) // Return an error message
        }
        show.reserved += count // Reserve the specified number of seats
        saveShows(shows) // Save shows to LocalStorage
        res.json(show) // Return the updated show object
    })
    .delete('/cancel', (req, res) => { // Handle DELETE requests to /cancel
        const reservations = loadReservations() // Load reservations from LocalStorage
        const { showID, name } = req.body // Destructure showID and name from the request body
        const reservation = reservations[showID].find(reservation => reservation.name === name) // Find the reservation with the given showID and name
        reservations[showID] = reservations[showID].filter(reservation => reservation.name !== name) // Remove the reservation from the list of reservations
        saveReservations(reservations) // Save reservations to LocalStorage
        res.json({ canceled: true, showID, ...reservation }) // Return the canceled reservation object
    })
    .post('/reserveTickets', (req, res) => { // Handle POST requests to /reserveTickets
        const reservations = loadReservations() // Load reservations from LocalStorage
        const shows = loadShows() // Load shows from LocalStorage
        let count
        if (!req.body.count) { // Check if count is present in the request body
            res.status(500) // Set response status to 500 (Internal Server Error)
            return res.json({ error: `A ticket count is required to reserve tickets.`}) // Return an error message
        }
        if (!req.body.name) { // Check if name is present in the request body
            res.status(500) // Set response status to 500 (Internal Server Error)
            return res.json({ error: `A name is required to reserve tickets.`}) // Return an error message
        }
        count = parseInt(req.body.count) // Parse count as an integer
        show = shows.find(s => s._id === req.body.showID) // Find the show with the given showID
        if (!show) { // Check if show is not found
            res.status(500) // Set response status to 500 (Internal Server Error)
            return res.json({ error: `Cannot find show with id: ${req.body.showID}`}) // Return an error message
        }
        const remainingSeats = show.houseSize - show.reserved // Calculate the number of remaining seats
        if (remainingSeats < count) { // Check if there are not enough remaining seats
            res.status(500) // Set response status to 500 (Internal Server Error)
            return res.json({ error: `cannot reserve ${count} seats. Only ${remainingSeats} remaining.`}) // Return an error message
        }

        var list = reservations[req.body.showID]
        var reservation = { name: req.body.name, guests: req.body.count }
        if (!list) {
            reservations[req.body.showID] = []
        }
        reservations[req.body.showID].push(reservation) // Add the reservation to the list of reservations
        show.reserved += count // Reserve the specified number of seats
        saveReservations(reservations) // Save reservations to LocalStorage
        saveShows(shows) // Save shows to LocalStorage
        res.json({ success: true, showID: req.body.showID, ...reservation}) // Return the reserved ticket object
    })
    .get('/reservations/:showID', (req, res) => { // Handle GET requests to /reservations/:showID
        const reservations = loadReservations() // Load reservations from LocalStorage
        res.json(reservations[req.params.showID] || []) // Return the list of reservations for the given showID
    })
    .get('/show/:id', (req, res) => { // Handle GET requests to /show/:id
        const shows = loadShows() // Load shows from LocalStorage
        const show = shows.find(show => show._id === req.params.id) // Find the show with the given id
        res.json(show) // Return the show object
        console.log(`delivered show ${show.name}`) // Log the delivered show name
    })
    .get('/', (req, res) => { // Handle GET requests to /
        const shows = loadShows() // Load shows from LocalStorage
        const reservations = loadReservations() // Load reservations from LocalStorage
        res.json({shows, reservations}) // Return the shows and reservations objects
        console.log('shows and reservations returned') // Log that shows and reservations were returned
    })

// Start the server on port 3000
app.listen(3000, () => console.log(`entire ticket system running on port 3000`))