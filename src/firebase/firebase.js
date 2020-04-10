import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider ,database as default };


// database.ref('expenses').push({
//     description: "note1",
//     amount: 500,
//     note: "first expense",
//     createdAt: "1000"
// });

// database.ref('expenses').push({
//     description: "note2",
//     amount: 300,
//     note: "second expense",
//     createdAt: "12000"
// });

// database.ref('expenses').push({
//     description: "note3",
//     amount: 100,
//     note: "third expense",
//     createdAt: "3000"
// });


// database.ref().on('value',(snapshot)=>{
//      const name = snapshot.val().name;
//      const title = snapshot.val().job.title;
//      const company = snapshot.val().job.company;
//      console.log(`${name} is a ${title} at ${company}`)
// },(e)=>{
//     console.log(e);
// });

// database.ref().set({
//     name: 'Andrew Mead',
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Philadelphia',
//       country: 'United States'
//     }
//   }).then(() => {
//     console.log('Data is saved!');
//   }).catch((e) => {
//     console.log('This failed.', e);
//   });

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   });

// database.ref('isSingle').remove().then(()=>{
//     console.log('Removed!!!');
// }).catch((e)=>{
//     console.log(e);
// });


  //firebase.analytics();