const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Default page of the exercise
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

// Takes in the name in the address bar and displays on the page after Hello and in the terminal
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

// Displays the information in myMovies[] on the page /api/movies as text
app.get('/api/movies', (req, res) => {
    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    res.json({movies:myMovies});
})

// Shows the information that is in the index.html file
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// Takes in input from the index.html and then redirects to the /name and prints Hello (+ what was submited in the textbox) while showing the name in the address bar
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.firstname + ' ' + req.query.surname);
})

// Takes in input from the index.html and then redirects to the /name and prints Hello (+ what was submited in the textbox) without showing the name in the address bar
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})