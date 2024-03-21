import { getNextQuestionId } from "../utils";
import { CONSTANTS } from "../utils/CONSTANTS";
import { InitialContestState, InitialFormState } from "./initialState";


const initialFormState: InitialFormState = {
    name: '',
    questions: 5,
    maxQuestions: 120,
    startingDifficulty: '',
    endingDifficulty: '',
    time: 1,
    minimumTime: 1,
    maximumTime: 60,
    roomCode: '',
    toggleLoading: false,

};

const initialContestState: InitialContestState = {
    questionsList: [],
    currentQuestionId: '',
    currentQuestion: {
      question: '',
      options: []
    },
    selectedOption: '',
    contestType: 'GK'
};

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
    case CONSTANTS.TOGGLE_LOADING: 
      return { ...state, toggleLoading: !state.toggleLoading }
    default:
      return state;
  }
}

export function contestReducer(state = initialContestState, action: any) {
    switch (action.type) {
      case CONSTANTS.UPDATE_QUESTIONS_LIST:
        return { ...state, questionsList: action.payload };
      case CONSTANTS.UPDATE_CURRENT_QUESTION_ID:
        return { ...state, currentQuestionId: getNextQuestionId(state.questionsList, state.currentQuestionId) };
      case CONSTANTS.UPDATE_CURRENT_QUESTION:
        return { ...state, currentQuestion: action.payload };
      case CONSTANTS.RESET:
        return initialContestState;
      case CONSTANTS.UPDATE_CONTEST_TYPE:
        return { ...state, contestType: action.payload };
      case CONSTANTS.UPDATE_SELCTED_OPTION:
        return { ...state, selectedOption: action.payload };
      default:
        return state;
    }
  }

