const admin = require("firebase-admin");

const serviceAccount = require("./json/serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hamster-wars-daniel.firebaseio.com",
    storageBucket: "hamster-wars-daniel.appspot.com"

});

const db = admin.firestore();
const storage = admin.storage();

module.exports = { db, storage };