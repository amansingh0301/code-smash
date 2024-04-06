export interface Message {
    type: string,
    text: string,
    userId: string
}
export interface InitialChatState {
    isChatOpen: boolean,
    messages: Message[];
}

export const initialChatState: InitialChatState = {
    isChatOpen: false,
    messages: [{
        type: 'infoMessage',
        text: 'Welcome',
        userId: ''
    }]
}