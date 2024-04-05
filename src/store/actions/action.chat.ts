import { CONSTANTS } from "../../utils"
import { Message } from "../initialStates"

export const updateIsChatOpenState = (isChatOpen: boolean) => {
    return {
        type: CONSTANTS.UPDATE_IS_CHAT_OPEN,
        payload: isChatOpen
    }
}

export const addMessage = (message: Message) => {
    return {
        type: CONSTANTS.ADD_MESSAGE,
        payload: message
    }
}