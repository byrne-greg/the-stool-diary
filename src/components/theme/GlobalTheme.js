import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import COLORS from '../../utils/colors';

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
      {children}
    </ThemeProvider>
  )
};
export default GlobalTheme