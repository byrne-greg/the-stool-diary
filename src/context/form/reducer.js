import {
  LOAD_SCREENS,
  UPDATE_HAS_REACHED_SUMMARY,
  UPDATE_CURRENT_SCREEN,
  MOVE_SCREEN_FORWARD,
  MOVE_SCREEN_BACKWARD,
} from "./actionTypes"

const moveScreenForwardIfPossible = (currentScreen, numOfScreens) => currentScreen + 1 > numOfScreens ? numOfScreens : currentScreen + 1
export const formReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case LOAD_SCREENS: return { ...state, screens: value }
    case UPDATE_HAS_REACHED_SUMMARY: return { ...state, hasReachedSummary: value }
    case UPDATE_CURRENT_SCREEN: return { ...state, currentScreen: value }
    case MOVE_SCREEN_FORWARD: return { ...state, currentScreen: moveScreenForwardIfPossible(state.currentScreen, state.screens.length - 1) }
    case MOVE_SCREEN_BACKWARD: return { ...state, currentScreen: state.currentScreen - 1 < 0 ? 0 : state.currentScreen - 1 }
    default: throw new Error("Cannot execute form dispatch action")
  }
}
export default formReducer




