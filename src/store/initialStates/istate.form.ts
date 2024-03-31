import { CONSTANTS } from "../../utils";

export interface InitialFormState {
    name: string,
    questions: number,
    maxQuestions: number,
    startingDifficulty: string,
    endingDifficulty: string,
    time: number,
    minimumTime: number,
    maximumTime: number,
    roomCode: string,
    mode: string
}


export const initialFormState: InitialFormState = {
    name: '',
    questions: 5,
    maxQuestions: 120,
    startingDifficulty: '',
    endingDifficulty: '',
    time: 1,
    minimumTime: 1,
    maximumTime: 60,
    roomCode: '',
    mode: CONSTANTS.PRACTICE
};