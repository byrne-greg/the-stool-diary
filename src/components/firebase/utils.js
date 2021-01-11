import firebase from "gatsby-plugin-firebase"

// ----- AUTH -----
// https://firebase.google.com/docs/auth/web/start

export const signUpUser = async ({ email = null, password = null }) => {
  const authError = { errorCode: null, errorMessage: null }

  if (email && password) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        authError.errorCode = error.errorCode
        authError.errorMessage = error.errorMessage
        console.error(authError)
      })
  } else {
    console.error("Attempt to sign up user with null credentials")
  }

  return authError
}

export const signInUser = async ({ email = null, password = null }) => {
  const authError = { errorCode: null, errorMessage: null }

  if (email && password) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        authError.errorCode = error.code
        authError.errorMessage = error.message
        console.error(authError.errorCode, ":", authError.errorMessage)
      })
  } else {
    console.error("Attempt to sign in user with null credentials")
  }
  return authError
}

export const signOutUser = async () => {
  await firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("signout successful")
    })
    .catch(error => {
      // An error happened.
      console.log("signout error", error)
    })
}

export const isUserSignedIn = async () => {
  let isSignedIn = false
  await firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      isSignedIn = true
    }
  })
  return isSignedIn
}
export const getCurrentUser = async () => {
  let currentUser = null
  await firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      const displayName = user.displayName
      const email = user.email
      const emailVerified = user.emailVerified
      const photoURL = user.photoURL
      const isAnonymous = user.isAnonymous
      const uid = user.uid
      const providerData = user.providerData
      // ...
      currentUser = user
    }
  })
  return currentUser
}

// ----- DATA -----

export const persistData = (namespace, obj) => {
  firebase
    .firestore()
    .collection(namespace)
    .add({ ...obj })
    // .then(function (docRef) {
    //   console.log("Document written with ID: ", docRef.id);
    // })
    .catch(function (error) {
      console.error("Error adding document: ", error)
    })
}

export const retrieveData = namespace => {
  async function getData(namespace) {
    const data = []
    await firebase
      .firestore()
      .collection(namespace)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // console.log(`${doc.id} => ${doc.data()}`)
          data.push({ ...doc.data(), id: doc.id })
        })
      })
    // console.log(data)
    return data
  }

  return getData(namespace)
}
