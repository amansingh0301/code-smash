import { InitialFormState, InitialLoaderState, InitialContestGKState, InitialPopupState, IntitalTimerState, IntialLobbyState, InitialChatState } from ".";

export interface ApplicationState {
    loadingVerdict: boolean;
}


export const intitialApplicationState: ApplicationState = {
    loadingVerdict: false,
}

export interface InitialState {
    app: ApplicationState,
    form: InitialFormState,
    contestGk: InitialContestGKState,
    loader: InitialLoaderState,
    popup: InitialPopupState,
    timer: IntitalTimerState,
    lobby: IntialLobbyState,
    chat: InitialChatState
}