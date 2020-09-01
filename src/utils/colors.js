
import { blue, deepPurple, green, orange, red, grey } from '@material-ui/core/colors';

const WHITE = '#FFFFFF'
const BLACK = '#000000'

const PRIMARY_PALETTE = { MAIN: { COL: blue[600], TEXT: BLACK }, LIGHT: { COL: blue[200], TEXT: BLACK  }, DARK: { COL: blue[800], TEXT: WHITE } }
const SECONDARY_PALETTE = { MAIN: { COL: deepPurple[600], TEXT: WHITE }, LIGHT: { COL: deepPurple[200], TEXT: BLACK  }, DARK: { COL: deepPurple[800], TEXT: WHITE } }
const ERROR_PALETTE = { MAIN: { COL: red[600], TEXT: BLACK }, LIGHT: { COL: red[200], TEXT: BLACK  }, DARK: { COL: red[800], TEXT: WHITE } }
const WARNING_PALETTE = { MAIN: { COL: orange[600], TEXT: BLACK }, LIGHT: { COL: orange[200],TEXT: BLACK  }, DARK: { COL: orange[800], TEXT: WHITE } }
const SUCCESS_PALETTE = { MAIN: { COL: green[600], TEXT: WHITE }, LIGHT: { COL: green[200],TEXT: BLACK  }, DARK: { COL: green[800], TEXT: WHITE } }

export default {
  WHITE: WHITE,
  BLACK: BLACK,
  BLUE: '#18819D',
  GREEN: '#2B882F',
  PURPLE: '#624983',
  PINK: '#E70572',
  GREY: '#636E72',
  MATERIAL: {
    GREY: 'rgba(0, 0, 0, 0.54)'
  },
  VIRIDIS: {
    SCALE1: { BG: '#430154', TEXT: WHITE },
    SCALE2: { BG: '#482878', TEXT: WHITE },
    SCALE3: { BG: '#3E4A89', TEXT: WHITE },
    SCALE4: { BG: '#2C5C81', TEXT: WHITE },
    SCALE5: { BG: '#30A6B5', TEXT: WHITE },
    SCALE6: { BG: '#22AA94', TEXT: BLACK },
    SCALE7: { BG: '#35B778', TEXT: BLACK },
    SCALE8: { BG: '#6CCD59', TEXT: BLACK },
    SCALE9: { BG: '#B4DE2C', TEXT: BLACK },
    SCALE10: { BG: '#FDE725', TEXT: BLACK },
  },
  THEME: {
    PRIMARY: { ...PRIMARY_PALETTE },
    SECONDARY: { ...SECONDARY_PALETTE },
    ERROR: { ...ERROR_PALETTE },
    WARNING: { ...WARNING_PALETTE },
    INFO: { ...PRIMARY_PALETTE },
    SUCCESS: { ...SUCCESS_PALETTE },
    DISABLED: { COL: grey[700], TEXT: WHITE }
  }
}