const admin = require("firebase-admin");
const serviceAccountKey = require('./serviceAccountKey.json')

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountKey),
      databaseURL: "https://twitter-clone-bdtest-default-rtdb.firebaseio.com"
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

export default admin