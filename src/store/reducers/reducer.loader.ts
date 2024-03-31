import { CONSTANTS } from "../../utils";
import { initialLoaderState } from "../initialStates";

export function loaderReducer(state = initialLoaderState, action: any) {
    switch (action.type) {
      case CONSTANTS.TOGGLE_LOADING: 
        return { ...state, toggleLoading: !state.toggleLoading }
      default:
        return state;
    }
  }