import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import COLORS from '../../utils/colors';
import { CssBaseline } from '@material-ui/core';

const baseTheme = createMuiTheme({
  palette: {
    primary: { 
      // light: COLORS.THEME.SECONDARY.LIGHT.COL,
      main: COLORS.THEME.PRIMARY.MAIN.COL,
      // dark: COLORS.THEME.SECONDARY.DARK.COL,
    },
    secondary: { 
      // light: COLORS.THEME.SECONDARY.LIGHT.COL,
      main: COLORS.THEME.SECONDARY.MAIN.COL,
      // dark: COLORS.THEME.SECONDARY.DARK.COL,
    },
    warning: { 
      // light: COLORS.THEME.WARNING.LIGHT.COL,
      main: COLORS.THEME.WARNING.MAIN.COL,
      // dark: COLORS.THEME.WARNING.DARK.COL,
    },
    error: { 
      // light: COLORS.THEME.ERROR.LIGHT.COL,
      main: COLORS.THEME.ERROR.MAIN.COL,
      // dark: COLORS.THEME.ERROR.DARK.COL,
    },
    success: { 
      // light: COLORS.THEME.SUCCESS.LIGHT.COL,
      main: COLORS.THEME.SUCCESS.MAIN.COL,
      // dark: COLORS.THEME.SUCCESS.DARK.COL,
    },
    info: { 
      // light: COLORS.THEME.INFO.LIGHT.COL,
      main: COLORS.THEME.INFO.MAIN.COL,
      // dark: COLORS.THEME.INFO.DARK.COL,
    },
    background: {
      default: COLORS.WHITE
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