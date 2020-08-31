import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import COLORS from '../../utils/colors';
import { CssBaseline } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    background: {
      default: COLORS.WHITE
    }
  }
});
theme = responsiveFontSizes(theme);

const GlobalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
};
export default GlobalTheme