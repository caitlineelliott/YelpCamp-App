const express = require('express');
const app = express();
const path = require('path');

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