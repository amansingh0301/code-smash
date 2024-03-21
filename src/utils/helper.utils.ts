export const prepareTokenBody = (form: any) => {
    return JSON.stringify({
        name: form.name,
        time: form.time,
        questions: form.questions
    })
}

export const prepareContestQuestionsBody = (form: any) => {
    return JSON.stringify({
        questions: form.questions,
        type: 'GK'
    })
}

export const prepareGetQuestionBody = (contest: any) => {
    return JSON.stringify({
        questionId: contest.currentQuestionId,
        type: 'GK'
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