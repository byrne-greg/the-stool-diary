
import { blue, deepPurple, green, orange, red } from '@material-ui/core/colors';

const WHITE_COL = '#FFFFFF'
const BLACK_COL = '#000000'

const PRIMARY_PALETTE = { MAIN: { COL: blue[600], TEXT: BLACK_COL }, LIGHT: { COL: blue[200], TEXT: BLACK_COL  }, DARK: { COL: blue[800], TEXT: WHITE_COL } }
const SECONDARY_PALETTE = { MAIN: { COL: deepPurple[600], TEXT: WHITE_COL }, LIGHT: { COL: deepPurple[200], TEXT: BLACK_COL  }, DARK: { COL: deepPurple[800], TEXT: WHITE_COL } }
const ERROR_PALETTE = { MAIN: { COL: red[600], TEXT: BLACK_COL }, LIGHT: { COL: red[200], TEXT: BLACK_COL  }, DARK: { COL: red[800], TEXT: WHITE_COL } }
const WARNING_PALETTE = { MAIN: { COL: orange[600], TEXT: BLACK_COL }, LIGHT: { COL: orange[200],TEXT: BLACK_COL  }, DARK: { COL: orange[800], TEXT: WHITE_COL } }
const SUCCESS_PALETTE = { MAIN: { COL: green[600], TEXT: WHITE_COL }, LIGHT: { COL: green[200],TEXT: BLACK_COL  }, DARK: { COL: green[800], TEXT: WHITE_COL } }

export default {
  WHITE: WHITE_COL,
  BLACK: BLACK_COL,
  BLUE: '#18819D',
  GREEN: '#2B882F',
  PURPLE: '#624983',
  PINK: '#E70572',
  GREY: '#636E72',
  MATERIAL: {
    GREY: 'rgba(0, 0, 0, 0.54)'
  },
  VIRIDIS: {
    SCALE1: { BG: '#430154', TEXT: WHITE_COL },
    SCALE2: { BG: '#482878', TEXT: WHITE_COL },
    SCALE3: { BG: '#3E4A89', TEXT: WHITE_COL },
    SCALE4: { BG: '#2C5C81', TEXT: WHITE_COL },
    SCALE5: { BG: '#30A6B5', TEXT: WHITE_COL },
    SCALE6: { BG: '#22AA94', TEXT: BLACK_COL },
    SCALE7: { BG: '#35B778', TEXT: BLACK_COL },
    SCALE8: { BG: '#6CCD59', TEXT: BLACK_COL },
    SCALE9: { BG: '#B4DE2C', TEXT: BLACK_COL },
    SCALE10: { BG: '#FDE725', TEXT: BLACK_COL },
  },
  THEME: {
    PRIMARY: { ...PRIMARY_PALETTE },
    SECONDARY: { ...SECONDARY_PALETTE },
    ERROR: { ...ERROR_PALETTE },
    WARNING: { ...WARNING_PALETTE },
    INFO: { ...PRIMARY_PALETTE },
    SUCCESS: { ...SUCCESS_PALETTE },
  }
}