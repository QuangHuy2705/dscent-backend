const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('../../dscent-1c094ca5753a.json');

initializeApp({
  credential: cert(serviceAccount),
});

module.exports = getFirestore();
