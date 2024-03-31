import { CONSTANTS } from "../../utils"
import { InitialPopupState } from "../initialStates"

export const updatePopup = (popup: InitialPopupState) => {
    return {
        type: CONSTANTS.UPDATE_POPUP,
        payload: popup
    }
}