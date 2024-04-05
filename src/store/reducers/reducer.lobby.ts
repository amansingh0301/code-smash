import { CONSTANTS } from "../../utils";
import { Opponent, intialLobbyState } from "../initialStates";

export function lobbyReducer(state = intialLobbyState, action: any) {
  let opponents = [];
    switch (action.type) {
      case CONSTANTS.UPDATE_SHOW_LOBBY: 
        return { ...state, showLobby: action.payload }
      case CONSTANTS.UPDATE_OPPONENT_NAME: 
        opponents = state.opponents.map((opponent: Opponent) => {
          if(opponent.userId === action.payload.id){
            return {...opponent, name: action.payload.name};
          }
          return opponent;
        })
        return { ...state, opponents: opponents }
      case CONSTANTS.UPDATE_OPPONENT_SCORE: 
        opponents = state.opponents.map((opponent: Opponent) => {
          if(opponent.userId === action.payload.id){
            return {...opponent, score: action.payload.score};
          }
          return opponent;
        })
        return { ...state, opponents: opponents }
      case CONSTANTS.UPDATE_OPPONENT_STATUS: 
        opponents = state.opponents.map((opponent: Opponent) => {
          if(opponent.userId === action.payload.id){
            return {...opponent, status: action.payload.status};
          }
          return opponent;
        })
        return { ...state, opponents: opponents }
      case CONSTANTS.ADD_OPPONENT: 
        return { ...state, opponents: [...state.opponents, action.payload] }
      case CONSTANTS.UPDATE_CURRENT_USER: 
        return { ...state, currentUser: {...state.currentUser, ...action.payload} }
      case CONSTANTS.UPDATE_CURRENT_USER_MESSAGE: 
        return { ...state, currentUser: {...state.currentUser, message: action.payload} }
      default:
        return state;
    }
  }