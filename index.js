const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground')

// Connecting mongo database
mongoose.connect('mongodb://localhost:27017/yelp-camp');

// Database connection test
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('database open');
});

// Sets our view location to the home.ejs file
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Spins up the server
app.listen(4000, () => {
    console.log('serving on port 4000')
});


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/makecampground', async (req, res) => {
    const camp = new Campground({
        title: 'My Backyard',
        description: 'cheap camping!'
    })
    await camp.save();
    res.send(camp);
})