import { CONSTANTS } from "../../utils/CONSTANTS";
import { initialChatState } from "../initialStates";

export function chatReducer(state = initialChatState, action: any) {
  switch (action.type) {
    case CONSTANTS.UPDATE_IS_CHAT_OPEN:
      return { ...state , isChatOpen: action.payload };
    case CONSTANTS.ADD_MESSAGE:
      return { ...state, messages: [ ...state.messages, action.payload]}
    case CONSTANTS.RESET:
      return {...initialChatState};
    default:
      return state;
  }
}


