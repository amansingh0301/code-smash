import { CONSTANTS } from "../../utils";
import { initialContestState } from "../initialStates";

export function contestGkReducer(state = initialContestState, action: any) {
    switch (action.type) {
      case CONSTANTS.UPDATE_QUESTIONS_LIST:
        return { ...state, questionsList: action.payload };
      case CONSTANTS.UPDATE_CURRENT_QUESTION_ID:
        return { ...state, currentQuestionId: action.payload };
      case CONSTANTS.UPDATE_CURRENT_QUESTION:
        return { ...state, currentQuestion: action.payload };
      case CONSTANTS.RESET:
        return {...initialContestState};
      case CONSTANTS.UPDATE_CONTEST_TYPE:
        return { ...state, contestType: action.payload };
      case CONSTANTS.UPDATE_SELCTED_OPTION:
        return { ...state, selectedOption: action.payload };
      case CONSTANTS.UPDATE_VERDICT:
        return { ...state, verdict: action.payload };
      case CONSTANTS.UPDATE_IS_LAST:
        return { ...state, isLastQuestion: action.payload };
      case CONSTANTS.UPDATE_SELECTED_OPTIONS_LIST:
        const newSelectedOptionsList = {
          ...state.selectedOptionsList,
          [action.payload.currentQuestionId]: action.payload.selectedOption,
        };
        return { ...state, selectedOptionsList: newSelectedOptionsList};
      case CONSTANTS.UPDATE_RESULT:
        return { ...state, result: action.payload };
      default:
        return state;
    }
  }