import {
  persistData,
  retrieveRecordsByQuery,
} from "../../components/firebase/utils"
import { USER_NAMESPACE } from "../../components/firebase/namespaces"
import { INITIAL_USER_STATE } from "./model"

export function persistUserData(data) {
  const userObject = INITIAL_USER_STATE
  userObject.email = data.email
  userObject.forename = data.forename
  userObject.surname = data.surname
  persistData(USER_NAMESPACE, userObject)
}

export async function getUserRecordByEmail(email) {
  const userRecordsByEmail = await retrieveRecordsByQuery(
    USER_NAMESPACE,
    `email == ${email}`
  )

  // the user records should each contain unique emails and is enforced by auth
  return userRecordsByEmail[0]
}
