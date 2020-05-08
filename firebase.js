// IMPORTS
const admin = require("firebase-admin");
const serviceAccount = require("./json/serviceAccount.json");



// INITS

// Firebase-admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DB_URL,
    storageBucket: process.env.BUCKET
});

// Firestore and storage
const db = admin.firestore();
const storage = admin.storage();




// EXPORTS
module.exports = { db, storage };