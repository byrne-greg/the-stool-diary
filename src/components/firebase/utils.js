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

export const retrieveData = (namespace) => {

  async function getData(namespace) {
    const data = [];
    await db.collection(namespace).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        data.push({ ...doc.data(), id: doc.id })
      });
    })
    console.log(data);
    return data;
  }

  return getData(namespace);
}
