// IMPORTS
const { Router } = require('express');
const { auth, db } = require('./../firebase');

// Init new router
const router = new Router();

// GET






// POST

// New hamster
router.post('/', async (req,res) => {
    if(!!req.headers['multiple']){
        // Array of hamster objects, set header key "Multiple" to truthy
        req.body.forEach(async (hamster) => {
            console.log(`New hamster "${hamster.name}" with id ${hamster.id} created.`)
            await db
            .collection('hamsters')
            .doc(hamster.id.toString())
            .set(hamster)
            .catch(err => console.error(err));

        });
        res.status(201).send({
            msg: "New hamsters created."
        })

    }else{
        // Single hamster
        console.log(`New hamster ${req.body.name} with id ${req.body.id} created.`)
        await db
        .collection('hamsters')
        .doc(req.body.id.toString())
        .set(req.body)
        .catch(err => console.error(err))
    
        res.status(201).send({
            msg: "New hamster created."
        })
    }
})





// PUT









// EXPORTS
module.exports = router;