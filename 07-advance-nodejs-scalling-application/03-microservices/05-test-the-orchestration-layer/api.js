// Import required modules
const express = require('express') // Express is a web framework for Node.js
const bodyParser = require('body-parser') // Body-parser is a middleware for handling HTTP request bodies
const cors = require('cors') // CORS is a middleware for enabling Cross-Origin Resource Sharing
const fetch = require('node-fetch') // Node-fetch is a module for making HTTP requests

// Define functions for interacting with the show and reservation services
const getAllShows = () =>
    fetch('http://localhost:3001') // Make a GET request to the show service
        .then(res => res.json()) // Parse the response as JSON

const getShow = id =>
    fetch(`http://localhost:3001/${id}`) // Make a GET request to the show service with the specified ID
        .then(res => res.json()) // Parse the response as JSON

const holdSeats = (showID, count) =>
    fetch(`http://localhost:3001/hold-seats`, { // Make a PUT request to the show service to hold seats
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ count, showID })
    }).then(res => res.json()) // Parse the response as JSON

const makeReservation = (name, count, showID) =>
    fetch(`http://localhost:3002`, { // Make a POST request to the reservation service to make a reservation
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, count, showID })
    }).then(res => res.json()) // Parse the response as JSON

// Create an instance of the Express application
const app = express()
    .use(cors()) // Enable CORS for all routes
    .use(bodyParser.json()) // Parse JSON request bodies
    .use(bodyParser.urlencoded()) // Parse URL-encoded request bodies
    .post('/reserve', async (req, res) => { // Handle POST requests to the /reserve route

        let count, show

        if (!req.body.count) { // Check if a ticket count was provided
            res.status(500)
            return res.json({ error: `A ticket count is required to reserve tickets.`})
        }

        if (!req.body.name) { // Check if a name was provided
            res.status(500)
            return res.json({ error: `A name is required to reserve tickets.`})
        }

        // Parse the Count
        count = parseInt(req.body.count)

        // Lookup the Show
        show = await getShow(req.body.showID) // Get the show with the specified ID

        if (!show) { // Check if the show exists
            res.status(500)
            return res.json({ error: `Cannot find show with id: ${req.body.showID}`})
        }

        const remainingSeats = show.houseSize - show.reserved // Calculate the number of remaining seats

        if (remainingSeats < count) { // Check if there are enough remaining seats
            res.status(500)
            return res.json({ error: `cannot reserve ${count} seats. Only ${remainingSeats} remaining.`})
        }

        // Hold Seats with Show Service
        console.log(`holding ${count} seats for ${req.body.name}`)
        await holdSeats(req.body.showID, count) // Hold the specified number of seats for the show

        // Make Reservation with Reservation Service
        console.log(`making the reservation for ${req.body.name}`)
        const reservation = await makeReservation(req.body.name, count, req.body.showID) // Make a reservation for the specified show and count

        res.json({ success: true, showID: req.body.showID, ...reservation}) // Return a success response with the reservation details

    })
    .get('/', async (req, res) => { // Handle GET requests to the root route
        // Return a List of Shows Only
        console.log('requesting shows from show service')
        var shows = await getAllShows() // Get a list of all shows
        res.json(shows) // Return the list of shows as a JSON response
    })

app.listen(3000, () => console.log(`Show Ticket API running for all clients`)) // Start the Express application on port 3000