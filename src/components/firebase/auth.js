import { firebaseAuth } from "./firebase"

// ----- AUTH -----
// https://firebase.google.com/docs/auth/web/start

/**
 * Signs up a user using the Firebase Auth API
 *
 * @param {Object} credentials
 * @param {Object} credentials.email email address of user
 * @param {Object} credentials.password desired password of user
 *
 * @return {Object} response
 */
export async function signUpUser(credentials) {
  const response = {
    error: null,
    success: false,
    data: {},
  }

  if (typeof credentials === "object") {
    const { email = null, password = null } = credentials
    if (email && password) {
      await firebaseAuth
        .createUserWithEmailAndPassword(email, password)
        .then(firebaseResponse => {
          response.success = true
          response.data.userId = firebaseResponse.user.uid
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
      message: "parameter is not an object containing an email and password",
    }
  }

  return response
}

/**
 * Signs in a user using the Firebase Auth API
 *
 * @param {Object} credentials
 * @param {Object} credentials.email email address of user
 * @param {Object} credentials.password password of user
 *
 * @return {Object} response
 */
export async function signInUser(credentials) {
  const response = {
    error: null,
    success: false,
  }

  if (typeof credentials === "object") {
    const { email = null, password = null } = credentials
    if (email && password) {
      await firebaseAuth
        .signInWithEmailAndPassword(email, password)
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
      message: "parameter is not an object containing an email and password",
    }
  }

  return response
}

/**
 * Signs out the current user using the Firebase Auth API
 *
 * @return {Object} response
 */
export async function signOutUser() {
  const response = {
    error: null,
    success: false,
  }

  await firebaseAuth
    .signOut()
    .then(() => {
      response.success = true
    })
    .catch(error => {
      response.error = { ...error }
    })

  return response
}

/**
 
 */
/**
 * Retrieves the current authenticated user using the Firebase API.
 * If there is no authenticated user, then the response will include null as the authUser
 *
 * @return {Object} response
 */
export async function getCurrentAuthUser() {
  const response = {
    success: false,
    authUser: null,
  }
  await firebaseAuth.onAuthStateChanged(authUser => {
    response.success = true
    if (authUser) {
      // User is signed in.
      // const displayName = user.displayName
      // const email = user.email
      // const emailVerified = user.emailVerified
      // const photoURL = user.photoURL
      // const isAnonymous = user.isAnonymous
      // const uid = user.uid
      // const providerData = user.providerData
      // ...
      response.authUser = authUser
    }
  })
  return response
}

/**
 * Sends a user a password reset email using the Firebase Auth API
 * @param {Object} credentials
 * @param {Object} credentials.email the user email
 *
 * @return {Object} response
 */
export async function sendPasswordResetEmail(credentials) {
  const response = {
    error: null,
    success: false,
  }

  if (credentials) {
    const { email } = credentials
    if (email) {
      await firebaseAuth
        .sendPasswordResetEmail(email)
        .then(() => {
          response.success = true
        })
        .catch(error => {
          response.error = { ...error }
        })
    } else {
      response.error = {
        code: "custom-auth/missing-param",
        message: "missing required parameters - email",
      }
    }
  } else {
    response.error = {
      code: "custom-auth/missing-param",
      message: "parameter is not an object containing an email",
    }
  }

  return response
}
