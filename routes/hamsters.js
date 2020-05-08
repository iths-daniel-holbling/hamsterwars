// IMPORTS
const { Router } = require('express');
const { auth, db } = require('./../firebase');

// Init new router
const router = new Router();

// GET






// POST

// New hamster
router.post('/', async (req,res) => {
    await db
    .collection('hamsters')
    .doc(req.body.id)
    .set(req.body)
})





// PUT









// EXPORTS
module.exports = router;