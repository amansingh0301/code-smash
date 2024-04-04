import { CONSTANTS } from "../../utils/CONSTANTS";
import { initialChatState } from "../initialStates";

export function chatReducer(state = initialChatState, action: any) {
  switch (action.type) {
    case CONSTANTS.UPDATE_IS_CHAT_OPEN:
      return { isChatOpen: action.payload };
    default:
      return state;
  }
}


