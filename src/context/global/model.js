// TODO - lang_codes should be abstracted to a more common place
import LANG_CODES from "../../components/i18n/language-codes"
export const INITIAL_STATE = {
  theme: "light",
  lang: LANG_CODES.ENGLISH,
  user: null,
}
export default INITIAL_STATE
