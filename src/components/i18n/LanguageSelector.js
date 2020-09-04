import React, { useContext } from "react";
import PropTypes from "prop-types";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from "react-i18next";
import LANG_CODES from "./language-codes"
import { GlobalStateContext, GlobalDispatchContext } from "../../context/GlobalContextProvider"

const LanguageSelector = () => {

  const { lang } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext)

  const { t, i18n } = useTranslation();
  
  return(
    <Select
      labelId="language-selector-label"
      id="language-selector"
      value={lang}
      onChange={e => { dispatch({ type: "CHANGE_LANGUAGE", value: e.target.value}); i18n.changeLanguage(e.target.value)} }
    >
      <MenuItem value={LANG_CODES.ENGLISH}>{t("English")}</MenuItem>
      <MenuItem value={LANG_CODES.FRENCH}>{t("French")}</MenuItem>
   </Select>
  )
}

export default LanguageSelector