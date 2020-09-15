import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { blue, deepPurple, green, orange, red, grey, teal, brown } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';

const baseTheme = createMuiTheme({
  palette: {
    primary: { 
      // light: COLORS.THEME.SECONDARY.LIGHT.COL,
      main: teal[500],
      // dark: COLORS.THEME.SECONDARY.DARK.COL,
    },
    secondary: { 
      // light: COLORS.THEME.SECONDARY.LIGHT.COL,
      main: brown[500],
      // dark: COLORS.THEME.SECONDARY.DARK.COL,
    },
    warning: { 
      // light: COLORS.THEME.WARNING.LIGHT.COL,
      main: orange[600]
      // dark: COLORS.THEME.WARNING.DARK.COL,
    },
    error: { 
      // light: COLORS.THEME.ERROR.LIGHT.COL,
      main: red[600],
      // dark: COLORS.THEME.ERROR.DARK.COL,
    },
    success: { 
      // light: COLORS.THEME.SUCCESS.LIGHT.COL,
      main: green[600],
      // dark: COLORS.THEME.SUCCESS.DARK.COL,
    },
    info: { 
      // light: COLORS.THEME.INFO.LIGHT.COL,
      main: blue[600],
      // dark: COLORS.THEME.INFO.DARK.COL,
    },
    shade: {
      black: grey[900],
      white: grey[50]
    },
    background: {
      default: grey[50]
    }
  }
});
const responsiveTheme = responsiveFontSizes(baseTheme);
const GlobalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
};
export default GlobalTheme