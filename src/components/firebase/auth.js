import { firebaseAuth } from "./firebase"

// ----- AUTH -----
// https://firebase.google.com/docs/auth/web/start

/**
 * Signs up a user using the Firebase Auth API
 *
 * @param {Object} credentials
 * @param {Object} credentials.email email address of user
 * @param {Object} credentials.password desired password of user
 */
export async function signUpUser(credentials) {
  const response = {
    error: null,
    success: false,
  }

  if (typeof credentials === "object") {
    const { email = null, password = null } = credentials
    if (email && password) {
      await firebaseAuth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          response.success = true
        })
        .catch(error => {
          response.error = { ...error }
        })
    } else {
      response.error = {
        code: "custom-auth/missing-param",
        message: `missing required parameters - ${email ? "" : "email"} ${
          password ? "" : "password"
        }`,
      }
    }
  } else {
    response.error = {
      code: "custom-auth/missing-param",
      message: "parameters is not an object containing an email and password",
    }
  }

  return response
}

export const signInUser = async ({ email = null, password = null }) => {
  const authError = { errorCode: null, errorMessage: null }

  if (email && password) {
    await firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle errors here.
        authError.errorCode = error.code
        authError.errorMessage = error.message
        console.error(authError.errorCode, ":", authError.errorMessage)
      })
  }
  return authError
}

export const signOutUser = async () => {
  const authError = { errorCode: null, errorMessage: null }
  await firebaseAuth
    .signOut()
    // .then(() => {
    //   // Sign-out successful.
    //   console.log("signout successful")
    // })
    .catch(error => {
      // Handle errors here.
      authError.errorCode = error.code
      authError.errorMessage = error.message
      console.error(authError.errorCode, ":", authError.errorMessage)
    })
  return authError
}

export const getCurrentUser = async () => {
  let currentUser = null
  await firebaseAuth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // const displayName = user.displayName
      // const email = user.email
      // const emailVerified = user.emailVerified
      // const photoURL = user.photoURL
      // const isAnonymous = user.isAnonymous
      // const uid = user.uid
      // const providerData = user.providerData
      // ...
      currentUser = user
    }
  })
  return currentUser
}

export const sendPasswordResetEmail = async ({ email = null }) => {
  const authError = { errorCode: null, errorMessage: null }

  if (email) {
    await firebaseAuth.sendPasswordResetEmail(email).catch(function (error) {
      // Handle Errors here.
      authError.errorCode = error.errorCode
      authError.errorMessage = error.errorMessage
      console.error(authError)
    })
  } else {
    console.error(authError.errorCode, ":", authError.errorMessage)
  }

  return authError
}
