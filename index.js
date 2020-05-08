// IMPORTS
const express = require('express');
const { auth, db } = require('./firebase');
const app = express();


// Enable JSON formatting
app.use(express.json());


// STATIC ROUTES
app.use('/assets', express.static('hamsters'));


// ROUTE MODULES IMPORT
const chartsRoute = require('./routes/charts');
const gamesRoute = require('./routes/games');
const hamstersRoute = require('./routes/hamsters');
const statsRoute = require('./routes/stats');

// ROUTES
app.use('/charts', chartsRoute);
app.use('/games', gamesRoute);
app.use('/hamsters', hamstersRoute);
app.use('/stats', statsRoute);


// Start up server
app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
})