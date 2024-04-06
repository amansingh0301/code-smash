import { CONSTANTS } from "../../utils/CONSTANTS";
import { intialTimerState } from "../initialStates";

export function timerReducer(state = intialTimerState, action: any) {
  switch (action.type) {
    case CONSTANTS.UPDATE_TOTAL_TIME:
      return { ...state, totalTime: action.payload, remaining: action.payload };
    case CONSTANTS.UPDATE_REMAINING_TIME:
      return { ...state, remaining: Math.max(0,state.remaining - 1) };
    case CONSTANTS.UPDATE_PROGRESS:
      return { ...state, progress: Math.max(state.progress, action.payload) };
    case CONSTANTS.RESET:
      return { ...intialTimerState };
    case CONSTANTS.UPDATE_STARTING_IN:
      return { ...state, startingIn: action.payload };
    case CONSTANTS.UPDATE_IS_EVERYONE_READY:
      return { ...state, isEveryOneReady: action.payload };
    default:
      return state;
  }
}


