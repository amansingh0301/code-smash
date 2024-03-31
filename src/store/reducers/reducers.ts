import { CONSTANTS } from "../../utils/CONSTANTS";
import { intitialApplicationState } from "../initialStates";

export function appReducer(state = intitialApplicationState, action: any) {
  switch (action.type) {
    case CONSTANTS.UPDATE_LOADING_VERDICT:
      return { ...state, loadingVerdict: action.payload };
    default:
      return state;
  }
}


