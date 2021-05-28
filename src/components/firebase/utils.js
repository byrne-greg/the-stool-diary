import firebase from "gatsby-plugin-firebase"
import { USER_NAMESPACE } from "./namespaces"

// TODO MIGRATING DATA METHODS to collection.js

// ----- DATA -----

export const persistData = async (namespace, obj) => {
  if (namespace === USER_NAMESPACE) {
    await persistUser(obj)
  } else {
    await firebase
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
}

export const persistUser = async user => {
  await firebase
    .firestore()
    .collection(USER_NAMESPACE)
    .doc(user.uid) // set the document uid in firestore to the user uid
    .set({ ...user })
    .catch(error => {
      console.error("Error getting document:", error)
    })
}

export const retrieveData = namespace => {
  const getData = async () => {
    const data = []
    await firebase
      .firestore()
      .collection(namespace)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          data.push({ ...doc.data(), id: doc.id })
        })
      })
    return data
  }

  return getData()
}

export const retrieveUser = (namespace, documentId) => {
  const getData = async () => {
    let user = null
    const userRef = await firebase
      .firestore()
      .collection(namespace)
      .doc(documentId)
    await userRef
      .get()
      .then(doc => {
        if (doc.exists) {
          user = doc.data()
        } else {
          // doc.data() will be undefined in this case
          console.error("No such document!")
        }
      })
      .catch(error => {
        console.error("Error getting document:", error)
      })

    return user
  }

  return getData()
}

export const retrieveRecordsByQuery = (namespace, queryString) => {
  const query = queryString.split(" ")
  const fieldPath = query[0]
  const opString = query[1]
  const value = query[2]

  const getData = async () => {
    const data = []
    await firebase
      .firestore()
      .collection(namespace)
      .where(fieldPath, opString, value)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          data.push({ ...doc.data(), id: doc.id })
        })
      })
    return data
  }

  return getData()
}

export const deleteUser = async user => {
  await firebase
    .firestore()
    .collection(USER_NAMESPACE)
    .doc(user.uid) // set the document uid in firestore to the user uid
    .delete()
    .catch(error => {
      console.error("Error deleting document:", error)
    })
}
