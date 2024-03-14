import { CONSTANTS } from "../utils/CONSTANTS";
import { InitialContestState, InitialFormState } from "./initialState";


const initialFormState: InitialFormState = {
    name: '',
    startingDifficulty: '',
    endingDifficulty: '',
    timer: 30,
    roomCode: '',

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
