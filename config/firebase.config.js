const Firebase = require('firebase-admin');


const serviceAccount = require('../mendrive-580ed-firebase-adminsdk-fbsvc-8551417e88.json')

const firebase = Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-222ea.appspot.com'
})

module.exports = firebase;