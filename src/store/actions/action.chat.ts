import { CONSTANTS } from "../../utils"

export const updateIsChatOpenState = (isChatOpen: boolean) => {
    return {
        type: CONSTANTS.UPDATE_IS_CHAT_OPEN,
        payload: isChatOpen
    }
}