import { CONSTANTS } from "../../utils";
import { IntialLobbyState, Opponent, intialLobbyState } from "../initialStates";

export function lobbyReducer(state = intialLobbyState, action: any) {
    switch (action.type) {
      case CONSTANTS.UPDATE_SHOW_LOBBY: 
        return { ...state, showLobby: action.payload }
      case CONSTANTS.UPDATE_OPPONENT_NAME: 
        let opponents = state.opponents.map((opponent: Opponent) => {
          if(opponent.id === action.payload.id){
            return {...opponent, name: action.payload.name};
          }
          return opponent;
        })
        return { ...state, opponents: opponents }
      case CONSTANTS.UPDATE_OPPONENT_SCORE: 
        opponents = state.opponents.map((opponent: Opponent) => {
          if(opponent.id === action.payload.id){
            return {...opponent, score: action.payload.score};
          }
          return opponent;
        })
        return { ...state, opponents: opponents }
      case CONSTANTS.UPDATE_OPPONENT_STATUS: 
        opponents = state.opponents.map((opponent: Opponent) => {
          if(opponent.id === action.payload.id){
            return {...opponent, status: action.payload.status};
          }
          return opponent;
        })
        return { ...state, opponents: opponents }
      case CONSTANTS.ADD_OPPONENT: 
        opponents = [...state.opponents, {...action.payload}]
        return { ...state, opponents: opponents }
      default:
        return state;
    }
  }

  const getOpponentWithId = (id: string, state: IntialLobbyState) => {
    return state.opponents.find((opponent: Opponent) => opponent.id === id)
  } 