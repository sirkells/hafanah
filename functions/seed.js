const admin = require("firebase-admin");
var serviceAccount = require("../../audio2.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
const { faker } = require('@faker-js/faker');
const db = admin.firestore();
const fakeIt = () => {
 return db.collection("Music").add({
   username: faker.internet.userName(),
   email: faker.internet.email(),
   avatar: faker.internet.avatar(),
});
};
Array(5).fill(0).forEach(fakeIt);
