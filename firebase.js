// IMPORTS
const admin = require("firebase-admin");
const serviceAccount = require("./json/serviceAccount.json");



// INITS

// Firebase-admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hamster-wars-daniel.firebaseio.com",
    storageBucket: "hamster-wars-daniel.appspot.com"
});

// Firestore and storage
const db = admin.firestore();
const storage = admin.storage();




// EXPORTS
module.exports = { db, storage };