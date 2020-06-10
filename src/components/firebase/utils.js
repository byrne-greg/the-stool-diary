import firebase from 'gatsby-plugin-firebase'

const db = firebase.firestore();

export const persistData = (namespace, obj) => {
  db.collection(namespace).add({ ...obj })
    // .then(function (docRef) {
    //   console.log("Document written with ID: ", docRef.id);
    // })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}