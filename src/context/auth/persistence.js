import { persistData, retrieveUser } from "../../components/firebase/utils"
import { USER_NAMESPACE } from "../../components/firebase/namespaces"
import { INITIAL_USER_STATE } from "./model"

export function persistUserData(data) {
  const userObject = INITIAL_USER_STATE
  userObject.email = data.email
  userObject.forename = data.forename
  userObject.surname = data.surname
  userObject.uid = data.uid
  persistData(USER_NAMESPACE, userObject)
}

export async function getUserRecord(uid) {
  return await retrieveUser(USER_NAMESPACE, uid)
}
