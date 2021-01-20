// TODO - lang_codes should be abstracted to a more common place
import LANG_CODES from "../../components/i18n/language-codes"

export const INITIAL_STATE = {
  theme: "light",
  lang: LANG_CODES.ENGLISH,
  // this is data about the user that is related to the application
  // null is purposefully used to indicate an anonymous user
  user: null,
  // this is data set by firebase auth and used for checking user auth status.
  authUser: null,
}
export default INITIAL_STATE
