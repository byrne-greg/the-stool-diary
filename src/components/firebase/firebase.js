import firebase from "gatsby-plugin-firebase"

// Included because Firebase expects the window object to be included but when run on Gatsby build, it doesn't, causing build errors
// https://github.com/gatsbyjs/gatsby/issues/16181
const isBrowser = () => typeof window !== "undefined"
let Firebase = null
if (isBrowser()) {
  Firebase = firebase
} else {
  Firebase = { auth: () => {} }
}

export const firebaseAuth = Firebase.auth()
