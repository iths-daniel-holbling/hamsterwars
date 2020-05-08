const express = require('express');
const { auth, db } = require('./firebase');
const app = express();

app.use(express.json());
app.use('/assets', express.static('hamsters'));







app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
})