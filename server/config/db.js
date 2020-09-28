const  admin = require("firebase-admin");
const  serviceAccount = require("./dbkey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://customclick-bbaa8.firebaseio.com"
});

exports.admin = admin;

