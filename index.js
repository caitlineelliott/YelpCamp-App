const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(4000, () => {
    console.log('serving on port 4000')
});


app.get('/', (req, res) => {
    res.render('home');
})