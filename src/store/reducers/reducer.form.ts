import { CONSTANTS } from "../../utils";
import { initialFormState } from "../initialStates";

export function formReducer(state = initialFormState, action: any) {
    switch (action.type) {
      case CONSTANTS.UPDATE_NAME:
        return { ...state, name: action.payload };
      case CONSTANTS.STARTING_DIFFICULTY:
        return { ...state, startingDifficulty: action.payload };
      case CONSTANTS.UPDATE_TIME: 
        return { ...state, time: action.payload }
      case CONSTANTS.UPDATE_NUMBER_OF_QUESTIONS: 
        return { ...state, questions: action.payload }
      default:
        return state;
    }
  }