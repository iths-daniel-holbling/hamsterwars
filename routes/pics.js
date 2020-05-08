// IMPORTS
const { Router } = require('express');
const { db, storage } = require('./../firebase');

// Init new router
const router = new Router();




// GET
router.get('/:filename', async (req,res) => {
    let pic = await storage.bucket().file(`hamster-pics/${req.params.filename}`).download();
    pic = Buffer.concat(pic);
    res.status(200).contentType('jpeg').send(pic);
})



// POST




// PUT










// EXPORTS
module.exports = router;