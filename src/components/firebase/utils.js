import firebase from 'gatsby-plugin-firebase'

// ----- AUTH -----
// https://firebase.google.com/docs/auth/web/start

export const signUpUser = ({email=null, password=null}) => {
  // TODO
  if(email && password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    })
  }
}

export const signInUser = ({email=null, password=null}) => {
  // TODO
  if(email && password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    })
  }
}

export const isUserSignedIn = () => {
  // TODO is this the right usage?
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      // return user;
      return true;
    } else {
      // User is signed out.
      // ...
      return false;
    }
  });
}

// ----- DATA -----

export const persistData = (namespace, obj) => {
  firebase.firestore().collection(namespace).add({ ...obj })
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
    await firebase.firestore().collection(namespace).get().then((querySnapshot) => {
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
