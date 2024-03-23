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

export const preparecheckAnswerBody = (state: InitialState) => {
    const contest = state.contest;
    return JSON.stringify({
        questionId: contest.currentQuestionId,
        selectedOption: contest.selectedOption,
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

export const getPreviousQuestionId = (questionsList: string[], currentQuestionId: string) => {

    if(currentQuestionId === '-1')
        return '-1';

    const previousQuestionIdIndex = questionsList.indexOf(currentQuestionId) - 1;
    if(previousQuestionIdIndex < 0) 
        return '-1';

    return questionsList[previousQuestionIdIndex];
}

export const isLastQuestion = (questionsList: string[], nextQuestionId: string) => {
    const nextQuestionIdIndex = questionsList.indexOf(nextQuestionId);
    if(nextQuestionIdIndex === questionsList.length-1) 
        return true;

    return false;
}

export const isFirstQuestion = (questionsList: string[], previousQuestionId: string) => {
    if(previousQuestionId === '-1')
        return true;

    return false;
}

export const getSelectedOption = (currentQuestionId: string, selectedOptionsList: Map<string, string>) => {
    if(selectedOptionsList.has(currentQuestionId))
        return selectedOptionsList.get(currentQuestionId)

    return '';
}