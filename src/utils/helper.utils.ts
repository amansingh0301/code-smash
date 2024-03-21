import { InitialState } from "../store/initialState"

export const prepareTokenBody = (state: InitialState) => {
    const form = state.form;
    return JSON.stringify({
        name: form.name,
        time: form.time,
        questions: form.questions
    })
}

export const prepareContestQuestionsBody = (state: InitialState) => {
    const form = state.form;
    const contest = state.contest;
    return JSON.stringify({
        questions: form.questions,
        type: contest.contestType
    })
}

export const prepareGetQuestionBody = (state: InitialState) => {
    const contest = state.contest;
    return JSON.stringify({
        questionId: contest.currentQuestionId,
        type: contest.contestType
    })
}

export const getNextQuestionId = (questionsList: string[], currentQuestionId: string) => {

    if(!currentQuestionId)
        return questionsList[0];

    const nextQuestionIdIndex = questionsList.indexOf(currentQuestionId) + 1;
    if(nextQuestionIdIndex >= questionsList.length) 
        return '-1';

    return questionsList[nextQuestionIdIndex];
}