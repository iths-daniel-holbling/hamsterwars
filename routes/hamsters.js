// IMPORTS
const { Router } = require('express');
const { auth, db } = require('./../firebase');




// Init new router
const router = new Router();




// GET

// Random hamster
router.get('/random', async (req,res) => {
        // Array to perform random on
        let hamsterArr = [];
    
        // Get all hamsters from firebase
        let hamsters = await db
        .collection('hamsters')
        .get();
    
        // Push each hamster into array
        hamsters.forEach(hamster => hamsterArr.push(hamster.data()));
    
        // Return a random hamster
        res.status(200).send(hamsterArr[Math.floor(Math.random()*hamsterArr.length)]);
    
});

// Array of all hamsters
router.get('/', async (req,res) => {
    // Empty array for response
    let hamsterArr = [];

    // Get all hamsters from firebase
    let hamsters = await db
    .collection('hamsters')
    .get();

    // Push each hamster into array
    hamsters.forEach(hamster => hamsterArr.push(hamster.data()));

    // Respond with array of all hamsters
    res.status(200).send(hamsterArr);
});

// Specific hamster
router.get('/:id', async (req,res) => {
    // Get hamster from firebase
    let hamsters = await db
    .collection('hamsters')
    .where("id","==",req.params.id*1)
    .get()

    hamsters.forEach(hamster => {
        // Respond with chosen hamster
        res.status(200).send(hamster.data());
    })
});




// POST

// New hamster
router.post('/', async (req,res) => {
    if(!!req.headers['multiple']){
        // Array of hamster objects, set request header {"Multiple":true}
        req.body.forEach(async (hamster) => {
            console.log(`New hamster "${hamster.name}" created.`)
            await db
            .collection('hamsters')
            .doc()
            .set(hamster)
            .catch(err => console.error(err));

        });
        res.status(201).send({
            msg: "New hamsters created."
        })

    }else{
        // Single hamster
        console.log(`New hamster ${req.body.name} created.`)
        await db
        .collection('hamsters')
        .doc()
        .set(req.body)
        .catch(err => console.error(err));
    
        res.status(201).send({
            msg: "New hamster created."
        });
    }
});




// PUT




// EXPORTS
module.exports = router;