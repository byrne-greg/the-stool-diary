import { persistData } from "../../components/firebase/utils"
import { USER_NAMESPACE } from "../../components/firebase/namespaces"

export function persistUserData(state) {
  persistData(USER_NAMESPACE, state)
}
