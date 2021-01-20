// TODO - lang_codes should be abstracted to a more common place
import LANG_CODES from "../../components/i18n/language-codes"
import { INITIAL_USER_STATE } from "../auth/model"

export const INITIAL_STATE = {
  theme: "light",
  lang: LANG_CODES.ENGLISH,
  // this is data about the user that is related to the application
  user: INITIAL_USER_STATE,
  // this is data set by firebase auth and used for checking user auth status.
  // null is purposefully used to indicate an anonymous user
  authUser: null,
}
export default INITIAL_STATE
