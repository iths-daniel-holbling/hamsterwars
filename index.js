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



// AUTH
app.use((req,res,next) => {
    // Serve public folder
    if(req.url === '/' || req.url === '/assets'){
        next();

    // Else confirm API key
    }else{
        if(req.headers['authorization'] === process.env.API_KEY){
            console.log('API Key verified.');
            next();
        }else{
            // Reject if no match
            res.status(500).send({
                msg: 'API Key mismatch.'
            })
        }
    }
})



// Start up server
app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
})