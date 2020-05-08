// IMPORTS
const { Router } = require('express');
const { auth, db } = require('./../firebase');

// Init new router
const router = new Router();

// GET

// Total amount of games played
router.get('/total', async (req,res) => {
    // Grab all games from collection
    let games = await db
    .collection('games')
    .get();

    // Respond with an OK and total number of games
    res.status(200).send({
        totalGames: games.size
    });
});

// Interesting stats
router.get('/extended', async (req,res) => {
    let hamsters = await db
    .collection('hamsters')
    .get();

    let hamsterArr = [];

    hamsters.forEach(hamster => {
        hamsterArr.push(hamster.data());
    });

    res.send({
        averageAge: averageAge(hamsterArr),
        favFoods: favFoods(hamsterArr),
        numberOfHamsters: hamsters.size,
        numberOfGoodLittleHamsters: hamsters.size
    });
})

// Helper functions
function averageAge(hamsters){
    let output = 0;
    hamsters.forEach(hamster => {
        output += hamster.age;
    });
    output = output/hamsters.length
    return output;
}

function favFoods(hamsters){
    let favFoods = [];
    let output = {};
    hamsters.forEach(hamster => favFoods.push(hamster.favFood));
    favFoods.forEach(food => {
        if(output[food] !== undefined){
            output[food]++;
        }else{
            output[food] = 1;
        }
    })
    return output;
}

// EXPORTS
module.exports = router;