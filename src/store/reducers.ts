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
    toggleLoading: false

};

const initialContestState: InitialContestState = {
    score: 0,
    opponentScore: 0,
    totalAttempt: 0,
    successfulAttempt: 0
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
      case CONSTANTS.UPDATE_SCORE:
        return { ...state, score: state.score + action.payload };
      case CONSTANTS.UPDATE_OPPONENT_SCORE:
        return { ...state, opponentScore: state.score + action.payload };
      default:
        return state;
    }
  }

