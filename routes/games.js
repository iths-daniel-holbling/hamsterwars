// IMPORTS
const { Router } = require('express');
const { auth, db } = require('./../firebase');




// Init new router
const router = new Router();




// GET




// POST
// Add new game to games collection
router.post('/', async (req,res) => {
    // Get new timestamp
    let today = new Date();

    // Add new game to firestore collection 'games' with timestamp and contestants
    await db
    .collection('games')
    .doc()
    .set({
        timeStamp: today,
        contestants: req.body
    })

    // Respond with "Game added." to client
    res.status(201).send({msg: "Game added."})
})



// PUT




// EXPORTS
module.exports = router;