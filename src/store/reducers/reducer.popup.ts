import { CONSTANTS } from "../../utils/CONSTANTS";
import { initialPopupState } from "../initialStates";

export function popupReducer(state = initialPopupState, action: any) {
  switch (action.type) {
    case CONSTANTS.UPDATE_POPUP:
      return { ...action.payload };
    default:
      return state;
  }
}


