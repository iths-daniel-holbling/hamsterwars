var admin = require("firebase-admin");

var serviceAccount = require("./json/serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hamster-wars-daniel.firebaseio.com",
    storageBucket: "hamster-wars-daniel.appspot.com"

});

const auth = admin.auth();
const db = admin.firestore();
const storage = admin.storage();

module.exports = { auth, db, storage };